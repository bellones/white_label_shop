import { ComponentType } from "react";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "../constants/routes";

const screenOptions = {
    cardStyle: { backgroundColor: 'white' },
    headerShown: false,
};
const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Splash">
        {Object.entries({
          ...routes,
        }).map(([name, props]) => {
          return <Stack.Screen key={name} name={name} getComponent={()=>{
          const cmp = props.component as ComponentType;
         // cmp.defaultProps = props.props;
          return cmp;
          }} options={props.options}/>;
        })}
        </Stack.Navigator>
    );
};

export default MainStack;