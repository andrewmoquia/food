import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ISearchBarProps } from '../interface/search.interface';

const SearchBar = (props: ISearchBarProps) => {
    const { searchInput, onSearchInput, onSearchEnd } = props;
    return (
        <View style={styles.searchBar}>
            <View style={styles.searchIcon}>
                <Feather name='search' size={24} color='black' />
            </View>

            <TextInput
                style={styles.searchText}
                placeholder='Search hotel...'
                value={searchInput}
                onChangeText={(value) => onSearchInput(value)}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={() => onSearchEnd()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        alignItems: 'center',
        backgroundColor: '#e9eaea',
        borderRadius: 10,
        flexDirection: 'row',
        height: 50,
        margin: 10,
    },
    searchIcon: {
        alignItems: 'center',
        // backgroundColor: 'grey',
        height: 50,
        justifyContent: 'center',
        width: 50,
    },
    searchText: {
        alignSelf: 'center',
        // borderWidth: 1,
        flex: 1,
        fontSize: 20,
        height: 50,
    },
});

export default SearchBar;
