import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchComponent from './src/components/Search';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Search'>
                <Stack.Screen
                    name='Search'
                    component={SearchComponent}
                    options={{ title: 'Search Hotel' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
