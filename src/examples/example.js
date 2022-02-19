const LOTRClient = require('../lotr-client');
const client = new LOTRClient('rSm8Hbb1zRbOUDu8UKJF');

const getMoviesById = async () => {
  const response = await client.getMovieById({ id: '5cd95395de30eff6ebccde58' });
  console.log(response);
};

const getChapters = async () => {
  const response = await client.getChapters({
    sorting: { key: 'chapterName', type: client.SortingOptions.DESC },
  });
  return response;
};

const getChaptersById = async () => {
  const response = await client.getChapterById({}, '6091b6d6d58360f988133bc8');
  return response;

};
const getBooks = async () => {
  const response = await client.getBooks({});
  return response;

};

const getMovies = async () => {
  const response = await client.getMovies({
    pagination: { limit: 20, page: 1, offset: 5 },
    sorting: { key: 'name', type: client.SortingOptions.DESC },
    filtering: [{ key: 'name', type: client.FilterOptions.INCLUDE }],
  });
  return response;
};

const getQuotes = async () => {
  const response = await client.getQuotes({
      pagination: { limit: 20, page: 2 },
      sorting: { key: 'dialog', type: client.SortingOptions.DESC },
      filtering: [{ key: 'dialog', type: client.FilterOptions.REGEX, value: 'Aragorn' }],
    },
  );
  return response;
};

const getMoviesAboveBudget = async () => {
  const response = await client.getMovies({
      filtering: [{ key: 'budgetInMillions', type: client.FilterOptions.GREATER_THAN, value: 200 }],
    },
  );
  return response;
};
const example = async () => {
  console.log(await getMoviesAboveBudget());
  console.log(await getChapters());
  console.log(await getQuotes());
};

example();

