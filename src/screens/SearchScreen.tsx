import { ScrollView, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { useSearchActionHooks } from '../hooks/search.hooks';
import SearchResultList from '../components/SearchResultList';
import { ISearchScreenProps } from '../interface/search.interface';

const SearchScreen = ({ navigation }: ISearchScreenProps) => {
    const defSearchInput = '';
    const [searchInput, setSearchInput] = useState(defSearchInput);
    const { searchResult, errorMessage, sendSearchRequest } = useSearchActionHooks();

    const handleOnSearchInput = (value: string) => setSearchInput(value);
    const handleOnSearchEnd = () => sendSearchRequest(searchInput);

    const filterSearchResultByPrice = (price: string) => {
        return searchResult.filter((item) => item.price === price);
    };

    return (
        <>
            <SearchBar
                searchInput={searchInput}
                onSearchInput={handleOnSearchInput}
                onSearchEnd={handleOnSearchEnd}
            />
            {errorMessage && <Text>{errorMessage}</Text>}
            <ScrollView>
                <SearchResultList
                    title='Cost Effective'
                    results={filterSearchResultByPrice('$')}
                    navigation={navigation}
                />
                <SearchResultList
                    title='Bit Pricier'
                    results={filterSearchResultByPrice('$$')}
                    navigation={navigation}
                />
                <SearchResultList
                    title='Bit Spender'
                    results={filterSearchResultByPrice('$$$')}
                    navigation={navigation}
                />
            </ScrollView>
        </>
    );
};

export default SearchScreen;
