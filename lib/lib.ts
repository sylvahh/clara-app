/* eslint-disable no-unused-vars */
import resources from './resources';
import utils from '../utils';
import LibResource from './LibResource';
import { RequestResponse } from '../types/lib';

class Lib {
  apiKey: null | string;

  helpers: typeof LibResource;

  books: {
    list: () => Promise<RequestResponse>;
    get: (bookId: string) => Promise<RequestResponse>;
    allChapters: (bookId: string) => Promise<RequestResponse>;
  };

  chapters: {
    list: () => Promise<RequestResponse>;
    get: (bookId: string) => Promise<RequestResponse>;
  };

  characters: {
    list: () => Promise<RequestResponse>;
    get: (bookId: string) => Promise<RequestResponse>;
    allQuotes: (bookId: string) => Promise<RequestResponse>;
  };

  movies: {
    list: () => Promise<any>;
    get: (bookId: string) => Promise<RequestResponse>;
    allQuotes: (bookId: string) => Promise<RequestResponse>;
  };

  quotes: {
    list: () => Promise<RequestResponse>;
    get: (bookId: string) => Promise<RequestResponse>;
  };

  public constructor(apiKey: string) {
    this.helpers = LibResource;
    this.init(apiKey);
  }

  private setProperty = (key: string, value: any) => {
    this[`${key}`] = value;
  };

  private setResources = () => {
    Object.keys(resources).forEach((name) => {
      if (Object.prototype.hasOwnProperty.call(resources, name)) {
        this.setProperty(utils.pascalToCamelCase(name), resources[name]);
      }
    });
  };

  private setApiKey = (apiKey: string) => {
    this.helpers.setApiKey(apiKey);
  };

  private init = (apiKey: string) => {
    this.setResources();
    this.setApiKey(apiKey);
  };
}

export default Lib;
