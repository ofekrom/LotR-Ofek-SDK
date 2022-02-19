const { FilterOptions, SortingOptions } = require('./utils');

/**
 * Resolves user input to an HTTP query param representing a MongoDB query
 * @param {Object} params - Consists of pagination, sorting and filtering.
 * @return {string} - Returns a string representing  that, when fulfilled, will either return a JSON Object with the requested
 * data or an Error with the problem.
 */
const resolve = (params) => {
  const query = `${resolvePagination(params.pagination)}${resolveSorting(params.sorting)}${resolveFiltering(params.filtering)}`;
  if (query) {
    return `?${query}`;
  }
  return '';
};


const resolvePagination = (pagination) => {
  if (!pagination) {
    return '';
  }
  let pageParams = '';
  if (pagination.limit > 0) {
    pageParams += `limit=${pagination.limit}&`;
  }
  if (pagination.page > 0) {
    pageParams += `page=${pagination.page}&`;
  }
  if (pagination.offset > 0) {
    pageParams += `offset=${pagination.offset}&`;
  }
  return pageParams;
};

const resolveSorting = (sorting) => {
  if (sorting && sorting.key && sorting.type && SortingOptions[sorting.type]) {
    return `sort=${sorting.key}:${sorting.type}&`;
  }
  return '';
};


const resolveFiltering = (filtering) => {
  if (!filtering) {
    return '';
  }
  let filters = '';
  filtering.forEach(filter => {
    if (validateFilter(filter)) {
      let query = `${filter.key}`;
      switch (filter.type) {
        case FilterOptions.MATCH:
          query += `=${filter.value}`;
          break;
        case FilterOptions.NEGATE_MATCH:
          query += `!=${filter.value}`;
          break;
        case FilterOptions.INCLUDE:
        case FilterOptions.EXCLUDE:
          query += resolveInclude(filter);
          break;
        case FilterOptions.EXISTS:
          break;
        case FilterOptions.NOT_EXISTS:
          query += `!${query};`;
          break;
        case FilterOptions.REGEX:
          query += `=/${filter.value}/i`;
          break;
        case FilterOptions.NOT_REGEX:
          query += `!=/${filter.value}/i`;
          break;
        case FilterOptions.LESS_THAN:
          query += `<${filter.value}`;
          break;
        case FilterOptions.EQUAL_TO:
          query += `=${filter.value}`;
          break;
        case FilterOptions.GREATER_THAN:
          query += `>${filter.value}`;
          break;
        case FilterOptions.LESS_THAN_OR_EQUAL:
          query += `<=${filter.value}`;
          break;
        case FilterOptions.GREATER_THAN_OR_EQUAL:
          query += `>=${filter.value}`;
          break;
      }
      filters += query + '&';
    }
  });
  return filters.replace(/&$/, '');
};

const validateFilter = (filter) => {
  //In exists/not exists queries there is no value
  return filter.key && (filter.value || [FilterOptions.EXISTS, FilterOptions.NOT_EXISTS].includes(filter.type)) && filter.type && FilterOptions[filter.type];
};

const resolveInclude = (filter) => {
  let result = '';
  const prefix = filter.type === FilterOptions.INCLUDE ? '=' : '!=';
  if (Array.isArray(filter.value)) {
    result += prefix + filter.value.join(',');
  } else if (typeof filter.value === 'string' || filter.value instanceof String) {
    result += prefix + filter.value;
  }
  return result;
};

module.exports = resolve;
