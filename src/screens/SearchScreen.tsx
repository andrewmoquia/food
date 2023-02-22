import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const SearchScreen = () => {
    const defSearchInput = '';

    const [searchInput, setSearchInput] = useState(defSearchInput);

    const handleSearchActivity = (value: string) => {
        setSearchInput(value);
    };

    const handleSearchSubmitActivity = () => {
        console.log('Submitted');
    };

    return (
        <View>
            <SearchBar
                searchInput={searchInput}
                onSearchInput={handleSearchActivity}
                onSearchEnd={handleSearchSubmitActivity}
            />
            <Text>{searchInput}</Text>
        </View>
    );
};

export default SearchScreen;
