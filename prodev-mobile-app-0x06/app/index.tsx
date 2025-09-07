import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("@/assets/images/background-image.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {/* Logo */}
          <View style={styles.companyLogo}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          {/* Intro Text */}
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>
              The best prices for over 2 million properties worldwide
            </Text>
          </View>

          {/* Buttons & Footer */}
          <View style={styles.footer}>
            <View style={styles.buttonGroup}>
              <Link href="/join" asChild>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>
                    Join here
                  </Text>
                </TouchableOpacity>
              </Link>

              <Link href="/signin" asChild>
                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </Link>
            </View>

            <Link href="/(home)" asChild>
              <TouchableOpacity style={styles.continueContainer}>
                <Text style={styles.continueText}>Continue to home</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  logoImage: {
    width: 150,
    height: 50,
  },
  textGroup: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  continueContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  continueText: {
    color: "white",
    fontSize: 16,
  },
});
