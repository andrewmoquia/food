import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ISearchResultListProps } from '../interface/search.interface';
import SearchResultItemCard from '../components/SearchResultItemCard';

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
                    return <SearchResultItemCard item={item} />;
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default SearchResultList;
