export const apiUrl = 'http://localhost:3333';
export const fetcher =  (url: string) => fetch(url).then((res) => res.json());