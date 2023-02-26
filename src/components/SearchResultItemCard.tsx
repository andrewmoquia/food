import { Image, StyleSheet, Text, View } from 'react-native';
import { ISearchResultItem } from '../interface/search.interface';

const SearchResultItemCard = (props: ISearchResultItem) => {
    const { item } = props;
    return (
        <View>
            <Image source={{ uri: item.image_url }} style={styles.imageContainer} />
            <Text style={styles.textStyleOne}>{item.name}</Text>
            <Text style={styles.textStyleTwo}>
                {item?.rating || 0} Stars, {item?.review_count || 0} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 10,
        height: 120,
        width: 250,
    },
    textStyleOne: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 3,
    },
    textStyleTwo: {
        // fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 3,
    },
});

export default SearchResultItemCard;
