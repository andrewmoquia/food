import axios from 'axios';
import { yelpBaseUrl, yelpApiKey } from '../helper/config.helper';
import { ISearchApi, ISearchApiResponse } from '../interface/SearchBarInterface';

export const searchApi = async (params: ISearchApi): Promise<ISearchApiResponse> => {
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
        return {
            status: response?.status || 400,
            data: response?.data?.businesses || response?.data || 'Unexpected error!',
        };
    } catch (error) {
        const e = error as Error;
        return { status: 500, data: e?.message };
    }
};
