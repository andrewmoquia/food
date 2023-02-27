import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Search'>
                <Stack.Screen
                    name='Search'
                    component={SearchScreen}
                    options={{ title: 'Search Hotel' }}
                />
                <Stack.Screen
                    name='ResultShowScreen'
                    component={ResultShowScreen}
                    options={{ title: 'More Info' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
