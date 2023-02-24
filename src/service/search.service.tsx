import axios from 'axios';
import { yelpBaseUrl, yelpApiKey } from '../helper/config.helper';

export const searchApi = async (searchInput: string) => {
    try {
        // const config = {
        //     method: 'GET',
        //     url: yelpBaseUrl + '/search',
        //     // baseURL: yelpBaseUrl,
        //     headers: {
        //         Authorization: `Bearer ${yelpApiKey}`,
        //     },
        //     params,
        // };

        // console.log(config);

        axios
            .get(`${yelpBaseUrl}/search`, {
                params: {
                    limit: 3,
                    term: searchInput,
                    location: 'NYC',
                },
                headers: {
                    Authorization: `Bearer ${yelpApiKey}`,
                },
            })
            .then((res: any) => {
                console.log(res);
            })
            .catch((err: any) => {
                console.log(err);
            });
    } catch (error) {
        return error;
    }
};
