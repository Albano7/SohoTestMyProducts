import { StyleSheet } from "react-native";
import Colors from "@app/styles/colors";

const Theme = {
    App: StyleSheet.create({
        container: {
            flex: 1,
        },
        container_bg_white: {
            flex: 1,
            backgroundColor: Colors.white,
        },
        container_bg: {
            flex: 1,
            backgroundColor: Colors.bg,
            alignItems: "center",
            justifyContent: "center",
        },
        bg_white: {
            backgroundColor: Colors.bg
        },
        title_start_app: {
            marginVertical: 15,
            fontSize: 20,
            fontWeight: "bold",
            color: Colors.white,
        },
        title_login_app: {
            fontSize: 28,
            fontWeight: "bold",
            color: Colors.white,
        },
        logo_start_app: {
            width: 120,
            height: 120,
            resizeMode: "contain",
        },
    }),
    ProductList: StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: Colors.bg,
        },
        headerContainer: {
            marginVertical: 20
        },
        headerTitle: {
            textAlign: "center",
            fontSize: 23,
            fontWeight: "bold",
            color: Colors.white
        },
        contentContainer: {
            backgroundColor: "#e1e3e3",
            alignItems: "center",
            width: "100%",
            flex: 1,
            padding: 15,
            paddingBottom: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20
        },
        list: {
            width: "100%",
            flex: 1
        },
        userCard: {
            marginVertical: 5,
            padding: 15,
            borderRadius: 15,
            backgroundColor: Colors.white,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            flexDirection: "row",
            alignItems: "center"
        },
        avatarContainer: {
            width: 60,
            alignItems: "center",
            alignSelf: "center",
            marginRight: 20
        },
        avatar: {
            width: 55,
            height: 55,
            borderRadius: 5,
            resizeMode: "stretch"
        },
        userName: {
            color: Colors.black,
            fontSize: 15,
            fontWeight: "600"
        },
        separator: {
            height: 5
        },
        listSeparator: {
            height: 10
        },
        errorText: {
            color: Colors.black,
            fontSize: 15,
            fontWeight: "600"
        }
    }),
    Login: StyleSheet.create({
        headerContainer: {
            paddingVertical: 70,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.bg,
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
        },
        formContainer: {
            flex: 1,
            padding: 20,
            alignItems: "center"
        },
        errorText: {
            fontSize: 15,
            color: 'red',
            marginBottom: 20
        },
        formInputContainer: {
            flex: 1,
            width: "100%"
        },
        inputError: {
            fontSize: 10,
            color: 'red'
        },
        passwordInput: {
            marginTop: 20
        },
        loginButton: {
            marginTop: 30
        },
        loginButtonContent: {
            height: 50
        }
    }),
    ProductListItem: StyleSheet.create({
        container_info: { 
            flex: 1, 
            alignItems: "flex-end" 
        },
        container_name_product: { 
            width: "100%", 
            alignItems: "flex-start" 
        },
        container_price: { 
            backgroundColor: Colors.bg, 
            padding: 8, 
            borderRadius: 8, 
        },
        value_price: { 
            fontSize: 12, 
            fontWeight: "bold", 
            color: Colors.white 
        },
    })

}

export default Theme