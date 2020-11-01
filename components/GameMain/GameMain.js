import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { getChunks } from "../../utils/functions";

const GameMain = () => {
  const data_tableChars = "irpnnsiletbfooie";
  const data_tableCharsList = data_tableChars.split("");
  const [rowOne, rowTwo, rowThree, rowFour] = getChunks(data_tableCharsList, 4);
  //console.log(getChunks(data_tableCharsList, 4));
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lafhane</Text>
      </View>

      <Text>CountDown</Text>
      {/* TABLE START */}
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          {rowOne.map((char, index) => (
            <TouchableOpacity key={index} style={styles.character}>
              <Text style={styles.charText}>{char}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tableRow}>
          {rowTwo.map((char, index) => (
            <TouchableOpacity key={index} style={styles.character}>
              <Text style={styles.charText}>{char}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tableRow}>
          {rowThree.map((char, index) => (
            <TouchableOpacity key={index} style={styles.character}>
              <Text style={styles.charText}>{char}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tableRow}>
          {rowFour.map((char, index) => (
            <TouchableOpacity key={index} style={styles.character}>
              <Text style={styles.charText}>{char}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* TABLE END */}
      <View style={styles.information}>
        <Text>Stats</Text>
        <Text>Point</Text>
      </View>

      <Text>{"VALUE"}</Text>
      <Button title="submit" />
    </View>
  );
};

export default GameMain;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: "#043D69",
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "black",
  },
  titleText: {
    color: "white",
  },
  tableContainer: {
    height: "80%",
    backgroundColor: "#4A8FC4",
    justifyContent: "center",
  },
  tableRow: {
    flexDirection: "row",
    marginHorizontal: 30,
    height: 100,
  },
  character: {
    flex: 1,
    backgroundColor: "#657A91",
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  charText: {
    fontSize: 48,
    fontWeight: "600",
    color: "white",
  },
  information: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
