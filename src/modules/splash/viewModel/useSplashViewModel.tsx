import { useNavigation } from "@react-navigation/native";

const useSpLashViewModel = () => {

    const navigation = useNavigation();
    const init = async ()   => {
        setTimeout(() => {
             navigation.navigate("Tabs" as never);
        },2000);
    }

    return {
        init
    };
};

export default useSpLashViewModel;