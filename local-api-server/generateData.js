const jsf = require('json-schema-faker');
const fs = require('fs');
jsf.extend('faker', () => {
  const faker = require('faker');

  faker.custom = {
    imageUrl: () => {
      const random = Math.round(Math.random() * 1000);
      return faker.random.arrayElement([
        `${faker.image.nature()}?random=${random}`,
        `${faker.image.city()}?random=${random}`,
        `${faker.image.food()}?random=${random}`,
      ]);
    },
    itemId: () => {
      return faker.random
        .number({ min: 3000000000, max: 3999999999 })
        .toString();
    },
    createdAt: () => {
      // any time in the last 30 days
      return faker.date.recent(30).toISOString();
    },
    updatedAt: () => {
      // not too many updated entries
      return faker.random.arrayElement([
        null,
        null,
        null,
        faker.date.recent(0).toISOString(),
      ]);
    },
  };

  return faker;
});

jsf.option({
  resolveJsonPath: true,
  alwaysFakeOptionals: true,
});

const schema = {
  type: 'object',
  required: ['feeds', 'prospects'],
  properties: {
    feeds: {
      type: 'array',
      minItems: 3,
      maxItems: 3,
      items: { $ref: '#/definitions/feeds' },
    },
    prospects: {
      type: 'array',
      minItems: 3000,
      maxItems: 3500,
      items: { $ref: '#/definitions/prospects' },
    },
  },
  definitions: {
    feeds: {
      type: 'object',
      required: ['id', 'name'],
      properties: {
        id: {
          type: 'string',
          faker: 'random.uuid',
        },
        name: {
          type: 'string',
          enum: ['en-US', 'en-GB', 'de-DE'],
        },
      },
    },
    prospects: {
      type: 'object',
      required: ['id', 'feed_id', 'url', 'title'],
      properties: {
        id: {
          type: 'string',
          faker: 'random.uuid',
        },
        feed_id: {
          type: 'string',
          jsonPath: '$..feeds[*].id',
        },
        state: {
          type: 'string',
          enum: [
            'PENDING',
            'SNOOZED',
            'REJECTED',
            'APPROVED', // There should be many more approved prospects in the archives than
            'APPROVED', // pending or rejected ones.
            'APPROVED',
          ],
        },
        url: {
          type: 'string',
          faker: {
            fake: '{{internet.url}}/{{lorem.slug}}/',
          },
        },
        publisher: {
          type: 'string',
          faker: 'company.companyName',
        },
        author: {
          type: 'string',
          faker: {
            fake: '{{name.firstName}} {{name.lastName}}',
          },
        },
        title: {
          type: 'string',
          faker: 'lorem.sentence',
        },
        excerpt: {
          type: 'string',
          faker: 'lorem.paragraph',
        },
        imageUrl: {
          type: 'string',
          faker: 'custom.imageUrl',
        },
        altText: {
          type: 'string',
          faker: 'lorem.sentence',
        },
        itemId: {
          type: 'string',
          faker: 'custom.itemId',
        },
        topic: {
          type: 'string',
          enum: [
            'Business',
            'Career',
            'COVID-19',
            'Education',
            'Entertainment',
            'Food',
            'Gaming',
            'Health & Fitness',
            'Parenting',
            'Personal Finance',
            'Politics',
            'Science',
            'Self Improvement',
            'Sports',
            'Technology',
            'Travel',
          ],
        },
        sourceName: {
          type: 'string',
          enum: ['Syndication', 'Manual Entry', 'Other'],
        },
        sourceScore: {
          type: 'float',
          faker: 'random.float',
        },
        syndicationArticleId: {
          type: 'string',
          faker: 'random.hexaDecimal',
        },
        createdAt: {
          type: 'string',
          faker: 'custom.createdAt',
        },
        updatedAt: {
          type: 'datetime',
          faker: 'custom.updatedAt',
        },
      },
    },
  },
};

jsf.resolve(schema).then((data) => {
  const path = `${__dirname}/db.json`;
  console.log('Generating new data...');

  // Delete the previous db.json file if it exists
  // Truncating it below when overwriting is not enough. Why?
  // But this is better than the blank screen of death
  fs.unlink(path, (error) => {
    if (error) throw error;
  });

  fs.writeFile(
    path,
    JSON.stringify(data, null, 2),
    // Make sure the file is writable so that changes made on the frontend persist.
    // Note that it's still not enough - something else is needed to get it to work.
    { mode: 0o666 },
    function (error) {
      if (error) throw error;

      // And make sure it's writable on Linux as well
      // (see https://github.com/nodejs/node/issues/1104)
      fs.chmod(path, 0o666, (error) => {
        console.log(
          'Done.\n\033[1mRun `npm run api:start` to start using the local API server'
        );
      });
    }
  );
});
