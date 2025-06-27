import axios, { AxiosRequestHeaders } from 'axios';
import Err from './Error';

const DEFAULT_HOST: string = 'https://the-one-api.dev';
const DEFAULT_BASE_PATH: string = 'v2';
const DEFAULT_API_VERSION: string = null;

const DEFAULT_TIMEOUT: number = 80000;

class LibResource {
  private apiConfig = {
    auth: null,
    host: DEFAULT_HOST,
    basePath: DEFAULT_BASE_PATH,
    version: DEFAULT_API_VERSION,
    timeout: DEFAULT_TIMEOUT,
  };

  private basePath = `${this.apiConfig.host}/${this.apiConfig.basePath}`;

  private setApiField = (key: string, value: string) => {
    this.apiConfig[key] = value;
  };

  private getApiField = (key: string) => this.apiConfig[key];

  private setLibApiKey = (apiKey: string) => {
    if (apiKey) {
      this.setApiField('auth', `Bearer ${apiKey}`);
    } else {
      throw new Error(Err.generateErrorMessage('invalid_api_key'));
    }
  };

  private setHeaders = (): Partial<AxiosRequestHeaders> => ({
    Authorization: 'Bearer Iy5h5CYkaUCkOPUBJhYG' ?? this.getApiField('auth'),
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  private axiosReq = async (basePath: string, reqConfig: RequestProps) => {
    try {
      let resp;
      if (reqConfig.method === 'GET') {
        resp = (await axios.get(`${basePath}/${reqConfig.path}`, { headers: this.setHeaders() })).data;
      } else if (resp.method === 'POST') {
        resp = (await axios.post(`${basePath}/${reqConfig.path}`, {}, { headers: this.setHeaders() })).data;
      } else {
        resp = null;
      }
      return resp;
    } catch (e) {
      throw new Error(Err.generateErrorMessage(''));
    }
  };

  private makeApiRequest = async (props: RequestProps) => {
    if (!this.basePath) throw new Error(Err.generateErrorMessage('invalid_path'));
    if (!props) throw new Error(Err.generateErrorMessage('invalid_props'));
    if (!this.getApiField('auth')) new Error(Err.generateErrorMessage('invalid_api_key'));
    const resp = await this.axiosReq(this.basePath, props);
    return resp;
  };

  makeRequest = async (props: RequestProps) => {
    try {
      return await this.makeApiRequest(props);
    } catch (e) {
      throw new Error(Err.generateErrorMessage(''));
    }
  };

  setApiKey = (key: string) => {
    this.setLibApiKey(key);
  };
}

const newLibResource = new LibResource();

export default newLibResource;
