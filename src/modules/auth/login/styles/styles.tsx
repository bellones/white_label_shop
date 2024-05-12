import { StyleSheet } from "react-native";

const LoginStyles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 200,
        height: 200,
    },

    error: {
        color: 'red',
    },
});

export default LoginStyles;