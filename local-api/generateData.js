const jsf = require('json-schema-faker');
const fs = require('fs');
jsf.extend('faker', () => {
  const faker = require('faker');

  faker.custom = {
    snoozedUntil: () => {
      const date = new Date();

      date.setDate(
        date.getDate() +
          faker.random.number({
            min: 1,
            max: 14,
          })
      );

      // There shouldn't be too many snoozed entries.
      // Note that some of the entries will have different states
      // (i.e. REJECTED, APPROVED), so only a handful will appear
      // in the Snoozed tab (PENDING state + snoozedUntil in the future)
      const options = [null, null, date.toISOString()];
      const random = Math.floor(Math.random() * options.length);
      return options[random];
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
      const options = [null, null, null, faker.date.recent(0).toISOString()];
      const random = Math.floor(Math.random() * options.length);
      return options[random];
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
      minItems: 200,
      maxItems: 300,
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
          enum: ['en-US', 'en-UK', 'de-DE'],
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
          enum: ['PENDING', 'REJECTED', 'APPROVED'],
        },
        snoozedUntil: {
          type: 'datetime',
          faker: 'custom.snoozedUntil',
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
          faker: 'hacker.phrase',
        },
        excerpt: {
          type: 'string',
          faker: 'lorem.paragraph',
        },
        imageUrl: {
          type: 'string',
          faker: 'image.people',
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
          faker: 'lorem.word',
        },
        sourceScore: {
          type: 'float',
          faker: 'random.float',
        },
        syndicationArticleId: {
          type: 'string',
          faker: 'random.alphaNumeric',
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
  console.log('Writing to db.json');
  fs.writeFile(
    `${__dirname}/db.json`,
    JSON.stringify(data, null, 2),
    function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('done');
      }
    }
  );
});
