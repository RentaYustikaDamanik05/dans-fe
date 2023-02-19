import client from './request';

class Resource {
  constructor(url = '', baseUrl = 'https://localhost:3000', gateway = '') {
    this.gateway = gateway;
    this.url = url;
    this.additionalUrl = '';
    this.baseUrl = baseUrl;
  }

  /**
   * void set base url
   * @param {string} baseUrl
   */
  setBasetUrl(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  /**
   * void set gateway url
   * @param {string} baseUrl
   */
  setGateway(gateway = '') {
    this.gateway = gateway;
  }

  /**
   * void set url
   * @param {string} url
   */
  setUrl(url = '') {
    this.url = url;
  }

  /**
   * void set additional url
   * @param {string} additionalUrl
   */
  setAdditionalUrl(additionalUrl = '') {
    this.additionalUrl = additionalUrl;
  }

  /**
   * get data list
   * @param {object} query_params
   */
  getList(query_params = null) {
    return client({
      url: '/' + this.url + this.additionalUrl,
      baseURL: this.baseUrl + '/' + this.gateway,
      method: 'GET',
      params: query_params,
    });
  }

  /**
   * get detail data
   * @param {string|number} id
   * @param {object} query_params
   */
  getDetail(id, query_params) {
    return client({
      baseURL: this.baseUrl + '/' + this.gateway,
      url: '/' + this.url + this.additionalUrl + (id ? '/' + id : ''),
      method: 'GET',
      params: query_params,
    });
  }

  /**
   * create data
   * @param {object} body
   */
  create(body = {}, query_params = null) {
    return client({
      baseURL: this.baseUrl + '/' + this.gateway,
      url: '/' + this.url + this.additionalUrl,
      method: 'POST',
      data: body,
      params: query_params,
    });
  }

  /**
   * put data
   * @param {string|number} id
   * @param {object} body
   * @param {object} query_params
   */
  put(id, body = {}, query_params = null) {
    return client({
      baseURL: this.baseUrl + '/' + this.gateway,
      url: '/' + this.url + this.additionalUrl + (id ? '/' + id : ''),
      method: 'PUT',
      params: query_params,
      data: body,
    });
  }

  /**
   * patch data
   * @param {string|number} id
   * @param {object} body
   * @param {object} query_params
   */
  patch(id, body = {}, query_params = null) {
    return client({
      baseURL: this.baseUrl + '/' + this.gateway,
      url: '/' + this.url + this.additionalUrl + (id ? '/' + id : ''),
      method: 'PATCH',
      params: query_params,
      data: body,
    });
  }

  /**
   * delete data
   * @param {string|number} id
   * @param {object} query_params
   */
  remove(id, query_params) {
    return client({
      baseURL: this.baseUrl + '/' + this.gateway,
      url: '/' + this.url + this.additionalUrl + (id ? '/' + id : ''),
      method: 'DELETE',
      params: query_params,
    });
  }
}

export default Resource;
