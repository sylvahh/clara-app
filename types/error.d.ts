export interface Error {
    name: string;
    message: string;
}

export type ErrorType = 'invalid_path' | 'invalid_props' | 'invalid_method' | 'invalid_api_key';
