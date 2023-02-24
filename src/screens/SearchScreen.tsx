import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { searchApi } from '../service/search.service';
import { ISearchApiResponse, ISearchData } from '../interface/SearchBarInterface';

const SearchScreen = () => {
    const defSearchInput = '';
    const defSearchResult: ISearchData[] = [];

    const [searchInput, setSearchInput] = useState(defSearchInput);
    const [searchResult, setsearchResult] = useState(defSearchResult);

    const handleOnSearchInput = (value: string) => setSearchInput(value);

    const handleOnSearchEnd = async () => {
        const response: ISearchApiResponse = await searchApi({
            limit: 3,
            term: searchInput,
            location: 'NYC',
        });
        setsearchResult(response.data as unknown as ISearchData[]);
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
        </View>
    );
};

export default SearchScreen;
