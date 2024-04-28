import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import ForgotPassWordScreen from '../modules/auth/forgot_password';
import LoginScreen from '../modules/auth/login';
import RegisterScreen from '../modules/auth/register';
import CartScreen from '../modules/cart';
import CategoriesScreen from '../modules/categories';
import HomeScreen from '../modules/home';
import OrderScreen from '../modules/order';
import ProfileScreen from '../modules/profile';
import SplashScreen from '../modules/splash';
import TabsScreen from '../modules/tabs';

const options: NativeStackNavigationOptions = { gestureEnabled: false };


const routes ={
    Splash: {
        component: SplashScreen,
        props: {},
        options: { headerShown: false, ...options },
        
    },
    Login: {
        component: LoginScreen,
        props: {},
        options: { headerShown: false, ...options },
    },
    Register: {
        component: RegisterScreen,
        props: {},
        options: { headerShown: false, ...options },
    },
    ForgotPass: {
        component: ForgotPassWordScreen,
        props: {},
        options: { headerShown: false, ...options },
    },
    Cart: {
        component: CartScreen,
        props: {},
        options: { headerShown: false, ...options },
    },
    Categories: {
        component: CategoriesScreen,
        props: {},
        options: { headerShown: false, ...options },
    },
    Home: {
        component: HomeScreen,
        props: {},
        options: { headerShown: false, ...options },
    },
    Order: {
        component: OrderScreen,
        props: {},
        options: { headerShown: false, ...options },
    },
    Profile: {
        component: ProfileScreen,
        props: {},
        options: { headerShown: false, ...options },
    },
    Search: {
        component: CartScreen,
        props: {},
        options: { headerShown: false, ...options },
    },
    Tabs: {
        component: TabsScreen,
        props: {},
        options: { headerShown: false, ...options },
    },


};

export default routes;