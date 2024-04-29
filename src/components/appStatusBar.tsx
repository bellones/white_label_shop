import { StatusBar } from "react-native";
import IAppStatusBar from "../interfaces/IAppStatusBar";

const AppStatusBar = ( { backgroundColor} : IAppStatusBar) => {

    return (
        <StatusBar
            backgroundColor={backgroundColor !== undefined ? backgroundColor : 'white'}
            barStyle="dark-content"
        />
    )
}

export default AppStatusBar;