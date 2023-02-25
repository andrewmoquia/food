import { StyleSheet, Text, View } from 'react-native';
import { ISearchResultListProps } from '../interface/search.interface';

const SearchResultList = (props: ISearchResultListProps) => {
    const { title } = props;
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SearchResultList;
