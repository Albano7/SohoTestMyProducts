import Home from "@app/views/Home";
import Login from "@app/views/Login";
import ProductDetail from "@app/views/ProductDetail";
import ProductList from "@app/views/ProductList";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

const screenOptionsGeneral: NativeStackNavigationOptions = {
    headerShown: false,
}

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: screenOptionsGeneral,
    screens: {
        Home: {
            screen: Home,
        },
        Login: {
            screen: Login,
        },
        ProductList: {
            screen: ProductList,
        },
        ProductDetail: {
            screen: ProductDetail,
            options: {
                headerShown: true,
            }
        },
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;