import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/login/Login';

const Stack = createStackNavigator();

export enum UnLoggedRoutes {
  LOGIN = 'LOGIN',
}

function UnLogged() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={UnLoggedRoutes.LOGIN}
        component={Login}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default UnLogged;
