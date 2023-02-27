import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { IResultData, IResultShowScreenProps } from '../interface/search.interface';
import { useState, useEffect } from 'react';
import { searchOneApi } from '../service/search.service';

const ResultShowScreen = ({ route }: IResultShowScreenProps) => {
    const id = route?.params.id;
    const defResultValue: IResultData = {
        alias: '',
        name: '',
        photos: [],
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
            {result.name ? (
                <>
                    <Text>{result.name}</Text>
                    <FlatList
                        data={result.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={({ item }) => {
                            return <Image source={{ uri: item }} style={styles.imgStyle} />;
                        }}
                    />
                </>
            ) : (
                <Text>Loading!</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    imgStyle: {
        height: 250,
        width: 250,
    },
});

export default ResultShowScreen;
