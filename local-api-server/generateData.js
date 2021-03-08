const jsf = require('json-schema-faker');
const fs = require('fs');
jsf.extend('faker', () => {
  const faker = require('faker');

  /**
   * Set state, isLive and isScheduled flags here as they depend on each other:
   * the flags are only valid for APPROVED prospects and cannot both be true
   * at the same time.
   */
  let prospectState = '';
  let isLive = false;
  let isScheduled = false;

  /**
   * Set available feed names here so that they can be used in the function below.
   */
  const feedNames = ['en-US', 'en-GB', 'de-DE'];
  const feedNamesTaken = [];
  /**
   * Make sure each feed name appears in the generated data exactly once.
   */
  const generateUniqueFeedName = () => {
    let feedName = faker.random.arrayElement(feedNames);

    if (feedNamesTaken.includes(feedName)) {
      feedName = generateUniqueFeedName();
    }

    feedNamesTaken.push(feedName);

    return feedName;
  };

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
    prospectState: () => {
      // Weighing this heavily in favour of approved prospects
      prospectState = faker.random.arrayElement([
        'PENDING',
        'SNOOZED',
        'REJECTED',
        'APPROVED',
        'APPROVED',
        'APPROVED',
      ]);

      return prospectState;
    },
    isLive: () => {
      isLive = false;

      if (prospectState === 'APPROVED') {
        isLive = faker.random.arrayElement([true, false, false, false]);
      }

      return isLive;
    },
    isScheduled: () => {
      isScheduled = false;

      if (prospectState === 'APPROVED') {
        isScheduled = !isLive;
      }

      return isScheduled;
    },
    feedName: () => {
      return generateUniqueFeedName();
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
          faker: 'custom.feedName',
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
          faker: 'custom.prospectState',
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
        isLive: {
          type: 'boolean',
          faker: 'custom.isLive',
        },
        isScheduled: {
          type: 'boolean',
          faker: 'custom.isScheduled',
        },
        /**
         * There should only be very few entries that have had to be removed from
         * the live feed. Defaults to false for all prospects; to test the relevant
         * functionality, update this flag on the frontend by removing an entry from
         * the New Tab page.
         */
        isRemoved: {
          type: 'boolean',
          enum: [false],
        },
        /**
         * Same as above - this should be empty for all but a handful of prospects.
         */
        removalReason: {
          type: 'string',
          enum: [null],
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
  console.log('Writing to db.json...');

  const path = `${__dirname}/db.json`;

  fs.writeFile(
    path,
    JSON.stringify(data, null, 2),
    // Make sure the file is writable so that changes made on the frontend persist.
    // Note that it's still not enough - something else is needed to get it to work.
    { mode: 0o666 },
    function (err) {
      if (err) {
        console.error(err);
      } else {
        // And make sure it's writable on Linux as well
        // (see https://github.com/nodejs/node/issues/1104)
        fs.chmod(path, 0o666, (error) => {
          console.log('Updated file permissions.');
        });
        console.log('Created file.');
      }
    }
  );
});
