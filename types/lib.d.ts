export interface RequestProps {
method: 'POST' | 'GET';
path: string;
body?: any;
}

export interface RequestResponse {
docs: any[],
total: number,
limit: number,
offset: number,
page: number,
pages: number
}
