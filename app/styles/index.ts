import { StyleSheet } from "react-native";
import Colors from "@app/styles/colors";

const Theme = {
    App: StyleSheet.create({
        container: {
            flex: 1,
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
    }),
    ProductList: StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center"
        },
        headerContainer: {
            marginVertical: 20
        },
        headerTitle: {
            textAlign: "center",
            fontSize: 23,
            fontWeight: "bold",
            color: Colors.black
        },
        contentContainer: {
            backgroundColor: Colors.white,
            alignItems: "center",
            width: "100%",
            flex: 1,
            padding: 15,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20
        },
        list: {
            width: "100%",
            flex: 1
        },
        userCard: {
            padding: 15,
            borderRadius: 15,
            backgroundColor: "#e3e4e6",
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
            marginRight: 10
        },
        avatar: {
            width: 55,
            height: 55,
            borderRadius: 100,
            resizeMode: "center"
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
            height: 15
        },
        errorText: {
            color: Colors.black,
            fontSize: 15,
            fontWeight: "600"
        }
    })

}

export default Theme