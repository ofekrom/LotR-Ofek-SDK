const FilterOptions = {
  MATCH: 'MATCH',
  NEGATE_MATCH: 'NEGATE_MATCH',
  INCLUDE: 'INCLUDE',
  EXCLUDE: 'EXCLUDE',
  EXISTS: 'EXISTS',
  NOT_EXISTS: 'NOT_EXISTS',
  REGEX: 'REGEX',
  NOT_REGEX: 'NOT_REGEX',
  LESS_THAN: 'LESS_THAN',
  GREATER_THAN: 'GREATER_THAN',
  EQUAL_TO: 'EQUAL_TO',
  LESS_THAN_OR_EQUAL: 'LESS_THAN_OR_EQUAL',
  GREATER_THAN_OR_EQUAL: 'GREATER_THAN_OR_EQUAL',
};

const SortingOptions = { ASC: 'ASC', DESC: 'DESC' };

module.exports = { FilterOptions, SortingOptions };
