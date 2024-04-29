/* eslint-disable prettier/prettier */
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import AppStatusBar from "../../components/appStatusBar";
import styles from "./styles";
import useSpLashViewModel from "./viewModel/useSplashViewModel";

const SplashScreen = () => {

  const  { init } = useSpLashViewModel();
  useEffect(() => {
    init();
  },[])
  return (
    <>
      <AppStatusBar backgroundColor={styles.statusBar.backgroundColor} />
      <LottieView
        source={require("../../assets/lottie/animated_splash.json")}
        autoPlay
        loop={false}
        style={styles.splash}
      />
    </>
  );
};

export default SplashScreen;
