import { StatusBar } from "react-native";
import IAppStatusBar from "../interfaces/IAppStatusBar";

export const AppStatusBar = ( { backgroundColor} : IAppStatusBar) => {

    return (
        <StatusBar
            backgroundColor={backgroundColor !== undefined ? backgroundColor : 'white'}
            barStyle="dark-content"
        />
    )
}
