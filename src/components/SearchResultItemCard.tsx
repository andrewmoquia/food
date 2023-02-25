import { Text, View } from 'react-native';
import { ISearchResultItem } from '../interface/search.interface';

const SearchResultItem = (props: ISearchResultItem) => {
    const { item } = props;
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    );
};

export default SearchResultItem;
