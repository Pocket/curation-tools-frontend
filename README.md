# Curation Tools Frontend
This project serves as frontend/admin for an article curation service.

## Getting Started

Clone the repository:

```bash
git clone git@github.com:Pocket/curation-tools-frontend.git
```

Install the dependencies:

```bash
cd curation-tools-frontend
npm install
```

### Set up with the default API

To generate some data to use in the application locally, run the following command:

```bash
npm run api:generate-data
```

The data will be saved in `local-api-server/db.json`.

Start the local API server (by default it runs on port 4000):

```bash
npm run api:start
```

The local GraphQL API is now ready to accept requests and you will be able to view and manipulate the data you have just generated in the Curation Tools Frontend app.

If you would like to run or debug queries on the local API server itself, you can do so by accessing the GraphiQL interface at [http://localhost:4000/](http://localhost:4000/).

### Set up with the test Pocket API (deprecated)

Create an `.env.local` file in the root directory of the project which will hold your API keys. 
Add the following lines to the `.env.local` file: 

```bash
REACT_APP_API_ENDPOINT="YOUR_VALUE_HERE"
REACT_APP_API_KEY="YOUR_VALUE_HERE"
REACT_APP_API_REGION="YOUR_VALUE_HERE"
```

### Start the project
In the project directory, run:

```bash
npm start
```

The app will be available on [http://localhost:3000](http://localhost:3000).

## Coding standards

This project uses [ESLint](https://eslint.org/) with a TypeScript plugin to maintain coding standards and avoid potential bugs. 
It also uses [Prettier](https://prettier.io/) to enforce a consistent coding style. 

All TypeScript errors and notices, as well as any formatting inconsistencies picked up by Prettier, are treated as errors, and the app will not compile until they are fixed. Using `@ts-ignore` is not an option.

### IDE Setup

Popular IDEs for React developers, such as Visual Studio Code or WebStorm, integrate with both ESLint and Prettier easily. You may have to install plugins to support these tools. Once that is done, your IDE will automatically highlight any issues that ESLint picked up in the app code. 

For a smooth development experience, configure Prettier to reformat the code on save. If, for some reason, it is not an option, you cal also use linting scripts:

```bash
npm run lint # to check the code for potential errors and formatting inconsistencies 

npm run lint:fix # to fix (mainly) formatting issues, if any
```

Note that linting issues and TypeScript errors in the project's _tests_ do not prevent the app from compiling during development, but they will still need to be fixed before your code is merged to the `main` branch.

### Testing your code

To run the tests in the interactive watch mode, use this command:

```bash
npm run test
```

To see detailed information about the tests, use the `--verbose` flag:

```bash
npm run test -- --verbose
```

## Updating the local API

If any of the GraphQL queries, mutations or hooks are changed in `src/api/local`, the types and helper functions (such as custom hooks) need to be updated as well.

This can be done by running another script from the command line (make sure the local GraphQL server is up):

```bash
npm run api:generate-types
```

This script updates the `src/local/generatedTypes.ts` file. The generated code needs to be reformatted to comply with the project's Prettier config:

```bash
npm run lint:fix
```

### Troubleshooting

Updates to the API code may result in the app not rendering on the screen at all. Note that this may happen not only when you update a query but also when you switch from branch to branch. To fix, power down *both* the local GraphQL server and the frontend app itself (`Ctrl + C` in both terminal windows where these processes are running), regenerate the local `db.json` file, start the the local API and finally the app.

## All Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
