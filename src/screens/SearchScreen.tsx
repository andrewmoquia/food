import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { useSearchActionHooks } from '../hooks/search.hooks';
import SearchResultList from '../components/SearchResultList';

const SearchScreen = () => {
    const defSearchInput = '';
    const [searchInput, setSearchInput] = useState(defSearchInput);
    const { searchResult, errorMessage, sendSearchRequest } = useSearchActionHooks();

    const handleOnSearchInput = (value: string) => setSearchInput(value);
    const handleOnSearchEnd = () => sendSearchRequest(searchInput);

    const filterSearchResultByPrice = (price: string) => {
        return searchResult.filter((item) => item.price === price);
    };

    return (
        <View>
            <SearchBar
                searchInput={searchInput}
                onSearchInput={handleOnSearchInput}
                onSearchEnd={handleOnSearchEnd}
            />
            {errorMessage && <Text>{errorMessage}</Text>}
            <SearchResultList title='Cost Effective' results={filterSearchResultByPrice('$')} />
            <SearchResultList title='Bit Pricier' results={filterSearchResultByPrice('$$')} />
            <SearchResultList title='Bit Spender' results={filterSearchResultByPrice('$$$')} />
        </View>
    );
};

export default SearchScreen;
