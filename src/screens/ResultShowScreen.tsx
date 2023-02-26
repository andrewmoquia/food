import { Text, View } from 'react-native';
import { IResultShowScreen } from '../interface/search.interface';

const ResultShowScreen = ({ route }: IResultShowScreen) => {
    const id = route?.params.id;

    console.log(id);

    return (
        <View>
            <Text>Show Screen!</Text>
        </View>
    );
};

export default ResultShowScreen;
