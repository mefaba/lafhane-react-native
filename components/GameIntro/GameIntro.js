import React, { useContext } from "react";
import axios from "axios";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { GameContext } from "../../context/GameContext";

const GameIntro = (props) => {
  const { setIsStarted } = props;
  const { username, setUsername } = useContext(GameContext);
  //const [message, setMessage] = useState("");
  //const [isLoading, setIsLoading] = useState(false);

  const sendUsernameToAPI = () => {
    axios
      .post(`https://lafhane-server.herokuapp.com/api/users`, {
        username: username,
      })
      .then(({ data }) => {
        //then if response is true setIsStarted => True / Else if negative ask new user name
        if (data) {
          setIsStarted(false);
          setTimeout(() => {
            //Giriş başarısız olsa dahi 3 saniye sonra loading ekranı gitsin
            setIsLoading(false);
          }, 3000);
        } else {
          setIsStarted(true);
        }
        /* setIsStarted(true) */
      })
      .catch((err) => console.log("sendUsernameToAPI", err));
  };

  const handleStart = () => {
    if (username.length > 3 && username.length < 11) {
      //check if username exists in database.
      sendUsernameToAPI();
      //setIsLoading(true);
      /* setMessage(
        "Hoşgeldiniz yada Tekrar Deneyin. Bu isimde bir kullanıcı zaten oyunda olabilir. Farklı bir isim deneyin."
      ); */
    }
  };
  console.log("username:", username);
  return (
    <View style={styles.container}>
      <Text>Lafhane</Text>
      <Text>Min length: 4, Max Length: 10</Text>
      <Text>Username:</Text>
      <TextInput
        style={{
          width: "80%",
          padding: 10,
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Button onPress={handleStart} title="Start Game" color="#841584" />
    </View>
  );
};

export default GameIntro;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
