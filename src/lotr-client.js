const APIHandler = require('./api-handler');
const { FilterOptions, SortingOptions } = require('./utils');

class LOTRClient {
  constructor(token) {
    this.apiHandler = new APIHandler(token);
  }

  getBooks = async (params) => {
    return await this.apiHandler.sendRequest({
      path: '/book',
      params,
    });
  };

  getBookById = async (params, id) => {
    return await this.apiHandler.sendRequest({
      path: `/book/${id}`,
      params,
    });
  };

  getMovies = async (params) => {
    return await this.apiHandler.sendRequest({
      path: '/movie',
      params,
    });
  };

  getMovieById = async (params, id) => {
    return await this.apiHandler.sendRequest({
      path: `/movie/${id}`,
      params,
    });
  };

  getQuotesByMovieId = async (params, id) => {
    return await this.apiHandler.sendRequest({
      path: `/movie/${id}/quote`,
      params,
    });
  };

  getQuotes = async (params) => {
    return await this.apiHandler.sendRequest({
      path: `/quote`,
      params,
    });
  };

  getQuoteByMovieId = async (params, id) => {
    return await this.apiHandler.sendRequest({
      path: `/quote/${id}`,
      params,
    });
  };
  getCharacters = async ({ params = {} }) => {
    return await this.apiHandler.sendRequest({
      path: `/character`,
      params,
    });
  };
  getCharacterById = async ({ params = {}, id }) => {
    return await this.apiHandler.sendRequest({
      path: `/character/${id}`,
      params,
    });
  };
  getQuotesByCharacterId = async ({ params = {}, id }) => {
    return await this.apiHandler.sendRequest({
      path: `/character/${id}/quote`,
      params,
    });
  };

  getChapters = async (params) => {
    return await this.apiHandler.sendRequest({
      path: `/chapter`,
      params,
    });
  };

  getChaptersByBookId = async (params, id) => {
    return await this.apiHandler.sendRequest({
      path: `/book/${id}/chapter`,
      params,
    });
  };

  getChapterById = async (params, id) => {
    return await this.apiHandler.sendRequest({
      path: `/chapter/${id}`,
      params,
    });
  };
  FilterOptions = FilterOptions;
  SortingOptions = SortingOptions;
}

module.exports =
  LOTRClient;

