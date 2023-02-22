import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <View style={styles.searchIcon}>
                <Feather name='search' size={24} color='black' />
            </View>
            <TextInput style={styles.searchText} placeholder='Search hotel...' />
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
