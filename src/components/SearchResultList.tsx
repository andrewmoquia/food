import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ISearchResultListProps } from '../interface/search.interface';
import SearchResultItem from '../components/SearchResultItemCard';

const SearchResultList = (props: ISearchResultListProps) => {
    const { title, results } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <SearchResultItem item={item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SearchResultList;
