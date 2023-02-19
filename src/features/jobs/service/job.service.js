import Resource from '../../../express/resource';

export class JobService extends Resource {
  constructor() {
    let baseURL = 'https://localhost:3000';
    let url = 'jobs';
    let gateway = '';
    super(url, baseURL, gateway);
  }

  getAllJobs() {
    this.setAdditionalUrl('');
    return this.getList();
  }

  getDetailJob(id = '') {
    this.setAdditionalUrl(``);
    return this.getDetail(id);
  }
}
