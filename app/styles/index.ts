import { StyleSheet } from "react-native";
import Colors from "@app/styles/colors";

const Theme = {
    App: StyleSheet.create({
        container: {
            flex: 1,
        },
        containerBgWhite: {
            flex: 1,
            backgroundColor: Colors.white,
        },
        containerBg: {
            flex: 1,
            backgroundColor: Colors.bg,
            alignItems: "center",
            justifyContent: "center",
        },
        bgWhite: {
            backgroundColor: Colors.bg
        },
        titleStartApp: {
            marginVertical: 15,
            fontSize: 20,
            fontWeight: "bold",
            color: Colors.black,
        },
        titleLoginApp: {
            fontSize: 28,
            fontWeight: "bold",
            color: Colors.white,
        },
        logoStartApp: {
            width: 120,
            height: 120,
            resizeMode: "contain",
        },
        errorDontFound: {
            fontSize: 20,
            fontWeight: "bold",
            color: Colors.black,
            textAlign: "center",
            marginTop: 15,
        },
        titleText: {
            color: Colors.black,
            fontSize: 15,
            fontWeight: "600"
        },
        subtitleText: {
            fontSize: 12,
            color: "grey",
        },
        separator: {
            height: 10
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
            backgroundColor: Colors.bgGrey,
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
        containerInfo: {
            flex: 1,
            alignItems: "flex-end"
        },
        containerNameProduct: {
            width: "100%",
            alignItems: "flex-start"
        },
        containerPrice: {
            backgroundColor: Colors.bg,
            padding: 8,
            borderRadius: 8,
        },
        valuePrice: {
            fontSize: 12,
            fontWeight: "bold",
            color: Colors.white
        },
        productCard: {
            marginVertical: 5,
            padding: 20,
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
        imgContainer: {
            width: 60,
            alignItems: "center",
            alignSelf: "center",
            marginRight: 20
        },
        imgItemProduct: {
            width: 80,
            height: 80,
            resizeMode: "center"
        },
    }),
    ProductDetail: StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.bg
        },
        errorContainer: {
            flex: 1,
            backgroundColor: Colors.bgGrey
        },
        errorContentContainer: {
            flex: 1,
            backgroundColor: Colors.white,
            borderRadius: 30,
            marginTop: 20
        },
        imageContainer: {
            width: "100%",
            alignItems: "center"
        },
        imageWrapper: {
            width: 330,
            height: 330,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20
        },
        productImage: {
            width: 280,
            height: 280,
            resizeMode: "center"
        },
        detailsContainer: {
            flex: 1,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: 20,
            padding: 20
        },
        priceText: {
            color: Colors.black,
            fontSize: 20
        },
    })

}

export default Theme