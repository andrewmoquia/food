import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { searchApi } from '../service/search.service';

const SearchScreen = () => {
    const defSearchInput = '';

    const [searchInput, setSearchInput] = useState(defSearchInput);

    const handleOnSearchInput = (value: string) => {
        setSearchInput(value);
    };

    const handleOnSearchEnd = async () => {
        console.log('Submitted');

        const searchResult = await searchApi({
            limit: 3,
            term: searchInput,
            location: 'NYC',
        });

        console.log(searchResult);
    };

    return (
        <View>
            <SearchBar
                searchInput={searchInput}
                onSearchInput={handleOnSearchInput}
                onSearchEnd={handleOnSearchEnd}
            />
            <Text>{searchInput}</Text>
        </View>
    );
};

export default SearchScreen;
