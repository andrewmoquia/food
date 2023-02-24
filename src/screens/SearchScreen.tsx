import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { searchApi } from '../service/search.service';
import { ISearchApiResponse, ISearchData } from '../interface/SearchBarInterface';

const SearchScreen = () => {
    const defSearchInput = '';
    const defSearchResult: ISearchData[] = [];
    const defErrorMessage = '';

    const [searchInput, setSearchInput] = useState(defSearchInput);
    const [searchResult, setSearchResult] = useState(defSearchResult);
    const [errorMessage, setErrorMessage] = useState(defErrorMessage);

    const handleOnSearchInput = (value: string) => setSearchInput(value);

    const handleOnSearchEnd = async () => {
        const response: ISearchApiResponse = await searchApi({
            limit: 3,
            term: searchInput,
            location: 'NYC',
        });
        if (response.status >= 200 && response.status <= 300) {
            setSearchResult(response.data as unknown as ISearchData[]);
        } else {
            setErrorMessage(response.data as unknown as string);
        }
    };

    return (
        <View>
            <SearchBar
                searchInput={searchInput}
                onSearchInput={handleOnSearchInput}
                onSearchEnd={handleOnSearchEnd}
            />
            <Text>{searchInput}</Text>
            <Text>We have found {searchResult.length} result!</Text>
            <Text>{errorMessage}</Text>
        </View>
    );
};

export default SearchScreen;
