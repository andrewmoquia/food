import { useEffect, useState } from 'react';
import { searchApi } from '../service/search.service';
import { ISearchApiResponse, ISearchData } from '../interface/search.interface';

export const useSearchActionHooks = () => {
    const defSearchResult: ISearchData[] = [];
    const defErrorMessage = '';
    const defIsInitialSearchTrigged = false;

    const [searchResult, setSearchResult] = useState(defSearchResult);
    const [errorMessage, setErrorMessage] = useState(defErrorMessage);
    const [isInitialSearchTrigged, setInitialSearchTriggered] = useState(defIsInitialSearchTrigged);

    const sendSearchRequest = async (term: string) => {
        console.log('Searched term: ' + term);
        const response: ISearchApiResponse = await searchApi({
            limit: 3,
            term,
            location: 'NYC',
        });
        response.status >= 200 && response.status <= 300
            ? setSearchResult(response.data as unknown as ISearchData[])
            : setErrorMessage(response.data as unknown as string);
    };

    useEffect(() => {
        if (isInitialSearchTrigged === false) sendSearchRequest('food');
        return () => setInitialSearchTriggered(true);
    }, [isInitialSearchTrigged]);

    return { searchResult, errorMessage, sendSearchRequest };
};
