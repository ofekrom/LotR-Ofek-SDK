# LOTR API Server-Side SDK for Node.js

This SDK is designed for easy access into the https://the-one-api.dev/ APIs.

## Supported Node versions

This version of the LaunchDarkly SDK is compatible with Node.js versions 12 and above.

## Getting started

Start by running the following command:

`npm install launchdarkly-node-server-sdk`

Next, import the LOTR client in your application code:

`const LOTRClient = require('lotr-ofek');`

After you install and import the SDK, create a single, shared instance of LOTRClient. Specify your Bearer token here to
authorize your application to connect to the API.

`const client = new LOTRClient('YOUR_API_KEY');`

If you don't have an API key yet, sign up here:
https://the-one-api.dev/sign-up

All SDK methods are asynchronous and return a Promise, here is an example of how to use the SDK:

`const response = await client.getBooks()`

For more examples see the examples folder in this repository

For a full list of the SDK capabilities see LOTRClient in lotr-client

## Pagination, Sorting, Filtering 

The SDK supports pagination, sorting, filtering throughout the API using the params objct.

### Pagination

Using limit, page and offset, you control the content you'll receive from the API.

Here is an example:

`await client.getMovies({ params: { pagination: { limit: 20, page: 2}}})`

### Sorting

Results can be sorted according to any provided key that exists in the database.

The sort can be either ascending or descending and are accessed via LOTRClient#SortingOptions 

`await client.getChapters({
sorting: { key: 'chapterName', type: client.SortingOptions.DESC },
});`

### Filtering

You can filter out results according to the strategies in FilterOptions.

Here is an example of how to find all movies with budget of 200 million and above:

`await client.getMovies({
filtering: [{ key: 'budgetInMillions', type: client.FilterOptions.GREATER_THAN, value: 200 }]});`

Here is an example that showcases pagination, sorting and filtering altogether:

`await client.getQuotes({
pagination: { limit: 20, page: 1},
sorting: { key: 'dialog', type: client.SortingOptions.DESC},
filtering: [{ key: 'dialog', type: client.FilterOptions.INCLUDE, value:['Aragorn','You lie.'] }],
});`

## Learn more

Check out the complete API docs here:
https://the-one-api.dev/documentation

## Design

See DESIGN.md

## Next steps


- Add more unit tests, mainly around params-resolver
- Add more corner cases checks in params-resolver  
