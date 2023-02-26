import { Text, View } from 'react-native';
import { IResultData, IResultShowScreenProps } from '../interface/search.interface';
import { useState, useEffect } from 'react';
import { searchOneApi } from '../service/search.service';

const ResultShowScreen = ({ route }: IResultShowScreenProps) => {
    const id = route?.params.id;

    const defResultValue: IResultData = {
        alias: '',
    };

    const [result, setResult] = useState(defResultValue);

    useEffect(() => {
        if (id) {
            (async () => {
                const response = await searchOneApi(id);
                console.log(response);
                setResult(response.data as unknown as IResultData);
            })();
        }
    }, [id]);

    return (
        <View>
            <Text>Show Screen! {result.alias}</Text>
        </View>
    );
};

export default ResultShowScreen;
