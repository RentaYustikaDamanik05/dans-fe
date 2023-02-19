import Resource from '../../../express/resource';

export class AuthService extends Resource {
  constructor() {
    let baseURL = 'https://localhost:3000';
    let url = 'auth';
    let gateway = '';
    super(url, baseURL, gateway);
  }

  doCheckCurrentUser() {
    this.setAdditionalUrl('/me');
    return this.getList();
  }

  doLogin(data = {}) {
    this.setAdditionalUrl('/login');
    return this.create(data);
  }
}
