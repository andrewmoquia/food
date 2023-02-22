import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Change github username!</Text>
            <StatusBar style='auto' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#ffff',
        flex: 1,
        justifyContent: 'center',
    },
});

export default App;
