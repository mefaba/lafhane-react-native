import { StyleSheet } from "react-native";

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
    height: "70%",
    backgroundColor: "#4A8FC4",
    justifyContent: "center",
  },
  tableRow: {
    flexDirection: "row",
    marginHorizontal: 20,
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
  answerContainer: {
    alignItems: "center",
  },
  answer: {
    fontSize: 24,
    color: "white",
  },
});

export default styles;
