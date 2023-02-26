import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ISearchResultListProps } from '../interface/search.interface';
import SearchResultItemCard from '../components/SearchResultItemCard';

const SearchResultList = (props: ISearchResultListProps) => {
    const { title, results, navigation } = props;

    const handleOnPressResulItemCard = () => navigation.navigate('ResultShowScreen');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={handleOnPressResulItemCard}>
                            <SearchResultItemCard item={item} />
                        </TouchableOpacity>
                    );
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
