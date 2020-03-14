import axios, { AxiosResponse } from 'axios';

export const API = 'https://jsonplaceholder.typicode.com/todos/';

export const fetchData = async (query: string): Promise<AxiosResponse> => {
    const url = `${API}${query}`;
    return await axios.get(url);
};
