import axios from 'axios';
import whiteList from './whiteList';

const client = axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 60000,
});

client.interceptors.request.use(
  (config) => {
    const cookies = Object.fromEntries(
      document.cookie.split(/; /).map((c) => {
        const [key, v] = c.split('=', 2);
        return [key, decodeURIComponent(v)];
      })
    );
    config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
    if (whiteList.filter((v) => v === config?.url).length === 0) {
      config.headers['x-access-token'] = `${cookies['DANS_USER_ACCESS_TOKEN']}`;
      config.headers['Content-Type'] = 'application/json; charset=UTF-8';
    }

    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    let messageText = error?.message;
    switch (error.response.status) {
      case 400:
        messageText = 'Error Message : Bad Request';
        if (error.response.data.message === undefined) {
          if (error.response.message !== undefined) {
            messageText = 'Error Message : ' + error.response.message;
          }
        }
        if (error.response.data.message !== undefined) {
          messageText = 'Error Message : ' + error.response.data.message;
        }
        break;
      case 401:
        window.dispatchEvent(new Event('APP_AUTH_UNAUTHORIZED'));
        break;
      case 403:
        window.dispatchEvent(new Event('APP_AUTH_UNAUTHORIZED'));
        messageText =
          error.response.data.message !== undefined
            ? 'Error Message : ' + error.response.data.message
            : 'Error Message : Forbidden';
        break;
      case 404:
        messageText =
          error.response.data.message !== undefined
            ? 'Error Message : ' + error.response.data.message
            : 'Error Message : Not Found';
        break;
      case 405:
        messageText =
          error.response.data.message !== undefined
            ? 'Error Message : ' + error.response.data.message
            : 'Error Message : Method Not Allowed';
        break;
      case 406:
        messageText =
          error.response.data.message !== undefined
            ? 'Error Message : ' + error.response.data.message
            : 'Error Message : Not Acceptable';
        break;
      case 412:
        messageText =
          error.response.data.message !== undefined
            ? 'Error Message : ' + error.response.data.message
            : 'Error Message : Precondition Failed';
        break;
      case 415:
        messageText =
          error.response.data.message !== undefined
            ? 'Error Message : ' + error.response.data.message
            : 'Error Message : Unsupported Media Type';
        break;
      case 422:
        messageText = 'Error Message : ' + error.response.data.message;
        break;
      case 500:
        messageText = 'Error Message : Internal Server Error';
        break;
      case 501:
        messageText =
          error.response.data.message !== undefined
            ? 'Error Message : ' + error.response.data.message
            : 'Error Message : Not Implemented';
        break;
      default:
        messageText = 'Error Message : Something Went Wrong';
    }
    error.response.data.message = messageText;
    return Promise.reject(error);
  }
);

export default client;
