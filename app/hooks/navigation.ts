import SplashScreen from "@app/views/SplashScreen";
import Login from "@app/views/Login";
import ProductDetail from "@app/views/ProductDetail";
import ProductList from "@app/views/ProductList";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import Routes from "@app/constants/routes";
import Colors from "@app/styles/colors";

const screenOptionsGeneral: NativeStackNavigationOptions = {
    headerShown: false,
}

const RootStack = createNativeStackNavigator({
    initialRouteName: 'SplashScreen',
    screenOptions: screenOptionsGeneral,
    screens: {
        [Routes.SplashScreen]: SplashScreen,
        [Routes.Login]: Login,
        [Routes.ProductList]: ProductList,
        [Routes.ProductDetail]: {
            screen: ProductDetail,
            options: {
                headerShown: true,
                headerStyle: {
                    backgroundColor: Colors.bg,
                },
                headerTintColor: Colors.white,
                headerTitle: "",
                headerShadowVisible: false,
            }
        },
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;