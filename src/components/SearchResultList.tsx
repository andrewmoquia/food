import { StyleSheet, Text, View } from 'react-native';
import { ISearchResultListProps } from '../interface/search.interface';

const SearchResultList = (props: ISearchResultListProps) => {
    const { title, results } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
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
