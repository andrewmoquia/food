import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import { searchApi } from '../service/search.service';
import { ISearchApiResponse, ISearchData } from '../interface/search.interface';

const SearchScreen = () => {
    const defSearchInput = '';
    const defSearchResult: ISearchData[] = [];
    const defErrorMessage = '';
    const defIsInitialSearchTrigged = false;

    const [searchInput, setSearchInput] = useState(defSearchInput);
    const [searchResult, setSearchResult] = useState(defSearchResult);
    const [errorMessage, setErrorMessage] = useState(defErrorMessage);
    const [isInitialSearchTrigged, setInitialSearchTriggered] = useState(defIsInitialSearchTrigged);

    const sendSearchRequest = async (term: string) => {
        const response: ISearchApiResponse = await searchApi({
            limit: 3,
            term,
            location: 'NYC',
        });
        response.status >= 200 && response.status <= 300
            ? setSearchResult(response.data as unknown as ISearchData[])
            : setErrorMessage(response.data as unknown as string);
    };

    const handleOnSearchInput = (value: string) => setSearchInput(value);
    const handleOnSearchEnd = () => sendSearchRequest(searchInput);

    useEffect(() => {
        if (isInitialSearchTrigged === false) sendSearchRequest('food');
        return () => setInitialSearchTriggered(true);
    }, [isInitialSearchTrigged]);

    return (
        <View>
            <SearchBar
                searchInput={searchInput}
                onSearchInput={handleOnSearchInput}
                onSearchEnd={handleOnSearchEnd}
            />
            <Text>We have found {searchResult.length} result!</Text>
            <Text>{errorMessage}</Text>
        </View>
    );
};

export default SearchScreen;
