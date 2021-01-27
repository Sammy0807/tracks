import React from "react";
import NavLink from "./NavLink";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const EmptyList = () => {
  return (
    <View style={styles.noTracks}>
      <Text h2>You dont have any Tracks yet!</Text>
      <NavLink text="Create One" routeName="TrackCreate" />
    </View>
  );
};

const styles = StyleSheet.create({
  noTracks: {
    fontFamily: "Arvo",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 30,
  },
});
export default EmptyList;
