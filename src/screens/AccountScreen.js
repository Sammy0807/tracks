import React, { useContext } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Button, Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2 style={styles.head}>
        Account Screen
      </Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

const styles = StyleSheet.create({
  head: {
    paddingTop: Platform.OS === "ios" ? 15 : 10,
    margin: Platform.OS === "ios" ? 20 : 10,
  },
});

export default AccountScreen;
