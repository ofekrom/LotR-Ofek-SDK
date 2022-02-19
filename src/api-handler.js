const axios = require('axios');
const paramsResolver = require('./params-resolver');

const API_URL = 'https://the-one-api.dev/v2';

/**
 * Fetch information from the-one-api.
 * @param {string} path - URL path of the specific endpoint
 * @param {string} token - The One API generated bearer token
 * @param {Object} params - Object representing a MongoDB query. See params-resolver for more details
 * @return {Promise} - Returns a Promise that, when fulfilled, will either return a JSON Object with the requested
 * data or an Error with the problem.
 */
class APIHandler {
  constructor(token) {
    this.token = token;
  }

  sendRequest = async ({ path, params = {}, method = 'GET' }) => {
    if (!this.token) {
      throw new Error('No token found');
    }
    const headers = { 'Authorization': 'Bearer ' + this.token };
    const url = API_URL + path + paramsResolver(params);
    const response = await axios(url, {
      method,
      headers,
    });
    if (response.status >= 200 && response.status <= 202) {
      return response.data;
    }

    // 3XX, 4XX, 5XX
    return Promise.reject({
      status: response.status,
      message: response.statusText,
      body: response.data,
    });
  };

}

module.exports = APIHandler;

