import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ISearchResultListProps } from '../interface/search.interface';
import SearchResultItemCard from '../components/SearchResultItemCard';
// import { useNavigation } from '@react-navigation/native';

const SearchResultList = (props: ISearchResultListProps) => {
    const { title, results, navigation } = props;

    if (!results.length) {
        return null;
    }

    const handleOnPressResulItemCard = (id: string) => {
        navigation.navigate('ResultShowScreen', { id });
        // const navigation = useNavigation(); Alternarive to passing of navigate props from parent to child
    };

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
                        <TouchableOpacity onPress={() => handleOnPressResulItemCard(item.id)}>
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
