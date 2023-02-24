import axios from 'axios';
import { yelpBaseUrl, yelpApiKey } from '../helper/config.helper';

interface ISearchApi {
    limit: number;
    location: string;
    term: string;
}

export const searchApi = async (params: ISearchApi) => {
    try {
        const config = {
            method: 'GET',
            url: '/search',
            baseURL: yelpBaseUrl,
            headers: {
                Authorization: `Bearer ${yelpApiKey}`,
            },
            params,
        };

        const response = await axios(config);
        return { status: response?.status || 400, data: response?.data || {} };
    } catch (error) {
        return error;
    }
};
