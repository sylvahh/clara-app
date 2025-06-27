import { ErrorType } from '../types/error';

class LibError extends Error {
  static generateErrorMessage(error: ErrorType | '') {
    switch (error) {
      case 'invalid_path':
        return 'Invalid URL path supplied';
      case 'invalid_props':
        return 'Invalid request format';
      case 'invalid_method':
        return 'Invalid request method';
      case 'invalid_api_key':
        return 'Invalid api key';
      default:
        return 'Genric Error';
    }
  }
}

export default LibError;
