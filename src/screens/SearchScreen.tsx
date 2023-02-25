import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { useSearchActionHooks } from '../hooks/search.hooks';

const SearchScreen = () => {
    const defSearchInput = '';
    const [searchInput, setSearchInput] = useState(defSearchInput);
    const { searchResult, errorMessage, sendSearchRequest } = useSearchActionHooks();

    const handleOnSearchInput = (value: string) => setSearchInput(value);
    const handleOnSearchEnd = () => sendSearchRequest(searchInput);

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
