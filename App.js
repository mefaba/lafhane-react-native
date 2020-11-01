import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GameIntro from "./components/GameIntro/GameIntro";
import GameMain from "./components/GameMain/GameMain";
import GameProvider from "./context/GameContext";

export default function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <GameProvider>
      <View style={styles.screen}>
        {isStarted ? <GameMain /> : <GameIntro setIsStarted={setIsStarted} />}
      </View>
    </GameProvider>
  );
}

/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
} */

const styles = StyleSheet.create({
  screen: {
    paddingTop: 24,
  },
});
