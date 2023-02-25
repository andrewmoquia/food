import axios from 'axios';
import { yelpBaseUrl, yelpApiKey } from '../helper/config.helper';
import { ISearchApiParams, ISearchApiResponse } from '../interface/search.interface';

export const searchApi = async (params: ISearchApiParams): Promise<ISearchApiResponse> => {
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
        return { status: 500, data: e?.message || 'Something went wrong!' };
    }
};
