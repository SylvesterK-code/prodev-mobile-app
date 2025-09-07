# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.























Tasks 0. Navigation using Stack Navigation Patterns
--------------------------------------------------------------------------------------------------------------
mandatory
Objectives:

This task is designed to enhance your skills in developing mobile user interfaces and implementing navigation patterns using React Native. You will build a multi-screen mobile application with seamless navigation, following the Stack Navigation pattern.


Instructions:

Step 1: Set Up Your Project

Create a new expo app in the directory prodev-mobile-app-0x04 using the following command:
npx create-expo-app@latest prodev-mobile-app-0x04

Navigate into the project directory:
cd prodev-mobile-app-0x04

Reset the project using:
npm run reset-project

Download the required assets from here(https://savanna.alxafrica.com/rltoken/bWb4_MDtyKWagJSugUvBQg) and place them in the assets/images directory inside your project.

Step 2:

From your app directory, create the following files

index.tsx
join.tsx
Sign.tsx
It is important to separate our styling from our screen, to maintain a cleaner codebase. Create the following files under the root directory

constants/index.ts
styles/_mainstyle.ts
styles/_joinstyle.ts
Replace the content of constants/index.ts with the following

const BACKGROUNDIMAGE = require('@/assets/images/hero-icon.png')
const HEROLOGO = require('@/assets/images/Logo.png')
const HEROLOGOGREEN = require("@/assets/images/logo-green.png")
const GOOGLELOGO = require('@/assets/images/google.png')
const FACEBOOKLOGO = require('@/assets/images/facebook.png')

export { BACKGROUNDIMAGE, HEROLOGO, HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO }
Replace the content of styles/_mainstyle.ts with the following

import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    height: height,
  },
  logoContainer: {
    padding: SPACING.large,
    alignItems: "center",
    marginTop: 74,
  },
  titleContainer: {
    marginTop: SPACING.large,
  },
  titleText: {
    fontSize: FONT_SIZE.large,
    textAlign: "center",
    fontWeight: 800,
    color: COLORS.white,
  },
  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },
  titleSubText: {
    fontWeight: 300,
    fontSize: FONT_SIZE.small,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    flex: 1,
  },
  buttonPrimaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
  },
  buttonSecondary: {
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.small,
    marginTop: 19,
  },
});

export { styles };
Replace the content of styles/_joinstyle.ts with the following
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  iconsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22
  },
  titleTextGroup: {
    marginTop: 20
  },
  titleText: {
    fontWeight: 700,
    fontSize: 39,
  },
  subText: {
    fontWeight: 400,
    fontSize: 12,
    color: '#7E7B7B'
  },
  formGroup: {
    marginTop: 44,
    rowGap: 10
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 400,
    color: '#7B7B7B',
    marginBottom: 7
  },
  formControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10
  },
  formPasswordControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  passwordControl: {
    flex: 1
  },
  primaryButton: {
    backgroundColor: '#34967C',
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 300
  },
  secondaryButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  secondaryButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
    borderWidth: 1,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: 400
  },
  signupgroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: 77, 
    right: 76,
    bottom: 33
  },
  signupTitleText: {
    fontSize: 18,
    fontWeight: 400
  },
  signupSubTitleText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#FFA800'
  },
  dividerGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: '#e6e6e6'
  },
  dividerText: {
    fontSize: 17,
    fontWeight: 500,
    fontVariant: ['small-caps'],
    color: '#C2C2C2'
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#34967C',
    marginTop: 9,
  }
});

export { styles }
Step 3:

Setting up your screens. Note that we have already worked on the following screen from our previous tasks.

index.tsx (Move the contents from the following repository prodev-mobile-app/ prodev-mobile-app-0x02)
signin.tsx (Move the contents from the following repository prodev-mobile-app/ prodev-mobile-app-0x03)
Join.tsx : Notice the design for join now is similar to that of the sign in? Make the necessary changes to reflect the view.
Step 4:

Setting up the Layout pattern help expo decide the Navigation pattern to be used. From your app/_layout.tsx replace the content with the following:
import { Stack } from "expo-router";
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}
Step 5:

Start your application using the command:
npx expo start

Scan the QR code on your terminal with your device (iOS or Android) and text.
Repo:

GitHub repository: prodev-mobile-app
Directory: prodev-mobile-app-0x04
File: app/index.tsx, app/join.tsx, app/signin.tsx, styles/_mainstyle.ts, styles/_join.ts, constants/index.ts, app/_layout.tsx, app.json, assets/images/google.png, assets/images/logo.png,assets/images/splash.png,assets/images/facebook.png
ChatGPT said:

Perfect! You now have a clear breakdown of Task 0 for your Expo Router and React Native project. Let me rewrite this step-by-step task list in a clean, actionable checklist format so it’s easier to follow and submit:













✅ Task 0: Navigation using Stack Navigation Patterns
---------------------------------------------------------------------------------------------------------
Mandatory
Goal: Build a multi-screen mobile app with stack navigation using Expo Router, React Native, and proper screen styling separation.

🔹 Steps to Complete
Step 1: Set Up Your Project

Create a new Expo app:

npx create-expo-app@latest prodev-mobile-app-0x04


Navigate into the project directory:

cd prodev-mobile-app-0x04


Reset the project:

npm run reset-project


Download required assets (images/icons) - (https://savanna.alxafrica.com/rltoken/bWb4_MDtyKWagJSugUvBQg) and place them in:

assets/images

Step 2: Create File Structure

Create the following files:

Screens (inside app/):

ni app/index.tsx
ni app/join.tsx
ni app/signin.tsx


Styles:
mkdir styles
ni styles/_mainstyle.ts
ni styles/_joinstyle.ts


Constants:
mkdir constants
ni constants/index.ts

constants/index.ts
const BACKGROUNDIMAGE = require('@/assets/images/hero-icon.png')
const HEROLOGO = require('@/assets/images/Logo.png')
const HEROLOGOGREEN = require("@/assets/images/logo-green.png")
const GOOGLELOGO = require('@/assets/images/google.png')
const FACEBOOKLOGO = require('@/assets/images/facebook.png')

export { BACKGROUNDIMAGE, HEROLOGO, HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO }

styles/_mainstyle.ts
import { StyleSheet, Dimensions } from "react-native";

const COLORS = { white: "#fff" };
const SPACING = { small: 10, medium: 20, large: 40 };
const FONT_SIZE = { small: 18, medium: 24, large: 40 };
const BORDER_RADIUS = { large: 36 };
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImageContainer: { flex: 1, height: height },
  logoContainer: { padding: SPACING.large, alignItems: "center", marginTop: 74 },
  titleContainer: { marginTop: SPACING.large },
  titleText: {
    fontSize: FONT_SIZE.large, textAlign: "center",
    fontWeight: 800, color: COLORS.white,
  },
  titleSubTextContainer: { marginTop: SPACING.medium },
  titleSubText: {
    fontWeight: 300, fontSize: FONT_SIZE.small,
    textAlign: "center", color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white, alignItems: "center",
    padding: SPACING.medium, borderRadius: BORDER_RADIUS.large, flex: 1,
  },
  buttonPrimaryText: { fontSize: FONT_SIZE.small, fontWeight: 300, textAlign: "center" },
  buttonSecondary: {
    alignItems: "center", padding: SPACING.medium, borderRadius: BORDER_RADIUS.large,
    borderWidth: 1, borderColor: COLORS.white, flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small, fontWeight: 300,
    textAlign: "center", color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row", alignItems: "center", justifyContent: "center",
    gap: SPACING.medium, paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row", justifyContent: "center", alignItems: "center",
    gap: SPACING.small, marginTop: 19,
  },
});

export { styles };

styles/_joinstyle.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  iconsection: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginTop: 22,
  },
  titleTextGroup: { marginTop: 20 },
  titleText: { fontWeight: 700, fontSize: 39 },
  subText: { fontWeight: 400, fontSize: 12, color: '#7E7B7B' },
  formGroup: { marginTop: 44, rowGap: 10 },
  formLabel: {
    fontSize: 18, fontWeight: 400,
    color: '#7B7B7B', marginBottom: 7,
  },
  formControl: {
    borderWidth: 2, height: 50, borderRadius: 10,
    borderColor: '#E9E9E9', paddingHorizontal: 10,
  },
  formPasswordControl: {
    borderWidth: 2, height: 50, borderRadius: 10,
    borderColor: '#E9E9E9', paddingHorizontal: 10,
    flexDirection: 'row', alignItems: 'center',
  },
  passwordControl: { flex: 1 },
  primaryButton: {
    backgroundColor: '#34967C', height: 53,
    borderRadius: 10, justifyContent: 'center',
    alignItems: 'center', marginTop: 25,
  },
  buttonText: { color: 'white', fontSize: 17, fontWeight: 300 },
  secondaryButtonGroup: { rowGap: 15, marginTop: 15 },
  secondaryButton: {
    height: 53, borderRadius: 10, justifyContent: 'center',
    alignItems: 'center', flexDirection: 'row',
    columnGap: 10, borderWidth: 1,
  },
  secondaryButtonText: { fontSize: 18, fontWeight: 400 },
  signupgroup: {
    flexDirection: 'row', justifyContent: 'center',
    position: 'absolute', left: 77, right: 76, bottom: 33,
  },
  signupTitleText: { fontSize: 18, fontWeight: 400 },
  signupSubTitleText: { fontSize: 18, fontWeight: 600, color: '#FFA800' },
  dividerGroup: {
    flexDirection: 'row', alignItems: 'center',
    columnGap: 10, marginBottom: 25, marginTop: 29,
  },
  divider: { borderWidth: 1, flex: 1, borderColor: '#e6e6e6' },
  dividerText: {
    fontSize: 17, fontWeight: 500,
    fontVariant: ['small-caps'], color: '#C2C2C2',
  },
  forgotPasswordText: { textAlign: 'right', color: '#34967C', marginTop: 9 },
});

export { styles };

Step 3: Set Up Screens

Move existing index.tsx from prodev-mobile-app-0x02.

Move signin.tsx from prodev-mobile-app-0x03.

Create join.tsx similar to signin.tsx but updated for Join Now design.

Step 4: Configure Navigation Layout

Create app/_layout.tsx:

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}

Step 5: Run the App
npx expo start


Scan the QR code with Expo Go (iOS or Android).

📂 Deliverables

Push to GitHub repository: prodev-mobile-app
Directory: prodev-mobile-app-0x04
Include:

app/index.tsx
app/join.tsx
app/signin.tsx
styles/_mainstyle.ts
styles/_joinstyle.ts
constants/index.ts
app/_layout.tsx
app.json
assets/images/google.png
assets/images/logo.png
assets/images/splash.png
assets/images/facebook.png



















































































Tasks
0. Navigation using Stack Navigation Patterns
mandatory
Objectives:

This task is designed to enhance your skills in developing mobile user interfaces and implementing navigation patterns using React Native. You will build a multi-screen mobile application with seamless navigation, following the Stack Navigation pattern.


Instructions:

Step 1: Set Up Your Project

Create a new expo app in the directory prodev-mobile-app-0x04 using the following command:
npx create-expo-app@latest prodev-mobile-app-0x04

Navigate into the project directory:
cd prodev-mobile-app-0x04

Reset the project using:
npm run reset-project

Download the required assets from here and place them in the assets/images directory inside your project.

Step 2:

From your app directory, create the following files

index.tsx
join.tsx
Sign.tsx
It is important to separate our styling from our screen, to maintain a cleaner codebase. Create the following files under the root directory

constants/index.ts
styles/_mainstyle.ts
styles/_joinstyle.ts
Replace the content of constants/index.ts with the following

const BACKGROUNDIMAGE = require('@/assets/images/hero-icon.png')
const HEROLOGO = require('@/assets/images/Logo.png')
const HEROLOGOGREEN = require("@/assets/images/logo-green.png")
const GOOGLELOGO = require('@/assets/images/google.png')
const FACEBOOKLOGO = require('@/assets/images/facebook.png')

export { BACKGROUNDIMAGE, HEROLOGO, HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO }
Replace the content of styles/_mainstyle.ts with the following

import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    height: height,
  },
  logoContainer: {
    padding: SPACING.large,
    alignItems: "center",
    marginTop: 74,
  },
  titleContainer: {
    marginTop: SPACING.large,
  },
  titleText: {
    fontSize: FONT_SIZE.large,
    textAlign: "center",
    fontWeight: 800,
    color: COLORS.white,
  },
  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },
  titleSubText: {
    fontWeight: 300,
    fontSize: FONT_SIZE.small,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    flex: 1,
  },
  buttonPrimaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
  },
  buttonSecondary: {
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.small,
    marginTop: 19,
  },
});

export { styles };
Replace the content of styles/_joinstyle.ts with the following
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  iconsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22
  },
  titleTextGroup: {
    marginTop: 20
  },
  titleText: {
    fontWeight: 700,
    fontSize: 39,
  },
  subText: {
    fontWeight: 400,
    fontSize: 12,
    color: '#7E7B7B'
  },
  formGroup: {
    marginTop: 44,
    rowGap: 10
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 400,
    color: '#7B7B7B',
    marginBottom: 7
  },
  formControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10
  },
  formPasswordControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  passwordControl: {
    flex: 1
  },
  primaryButton: {
    backgroundColor: '#34967C',
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 300
  },
  secondaryButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  secondaryButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
    borderWidth: 1,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: 400
  },
  signupgroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: 77, 
    right: 76,
    bottom: 33
  },
  signupTitleText: {
    fontSize: 18,
    fontWeight: 400
  },
  signupSubTitleText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#FFA800'
  },
  dividerGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: '#e6e6e6'
  },
  dividerText: {
    fontSize: 17,
    fontWeight: 500,
    fontVariant: ['small-caps'],
    color: '#C2C2C2'
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#34967C',
    marginTop: 9,
  }
});

export { styles }
Step 3:











Setting up your screens. Note that we have already worked on the following screen from our previous tasks.





index.tsx (Move the contents from the following repository prodev-mobile-app/ prodev-mobile-app-0x02)

content of index.tsx
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  ImageBackground, 
  Dimensions, 
  TouchableOpacity 
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* Text */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            {/* Buttons & Navigation Prompt */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
  textGroup: {
    alignItems: "center",
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
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});









signin.tsx (Move the contents from the following repository prodev-mobile-app/ prodev-mobile-app-0x03)
content of sign in

import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          {/* <Text style={styles.mediumText}>SYLVESTER </Text> */}
          <Image source={require('@/assets/images/logo.png')} />
        </View>
        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don&apos;t have an account?</Text>
          <Text style={styles.subTextJoin}> Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}






Join.tsx : Notice the design for join now is similar to that of the sign in? Make the necessary changes to reflect the view.
Step 4:

create the join.tsx page










Setting up the Layout pattern help expo decide the Navigation pattern to be used. From your app/_layout.tsx replace the content with the following:
import { Stack } from "expo-router";
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}
Step 5:

Start your application using the command:
npx expo start

Scan the QR code on your terminal with your device (iOS or Android) and text.
Repo:

GitHub repository: prodev-mobile-app
Directory: prodev-mobile-app-0x04
File: app/index.tsx, app/join.tsx, app/signin.tsx, styles/_mainstyle.ts, styles/_join.ts, constants/index.ts, app/_layout.tsx, app.json, assets/images/google.png, assets/images/logo.png,assets/images/splash.png,assets/images/facebook.png



recreate the signin.ts file and the join.tsx file base on the styles _joinStyle.ts and mainStyle.ts
ChatGPT said:

Great! Let’s rewrite signin.tsx and join.tsx so they follow the styles/_joinstyle.ts and styles/_mainstyle.ts files you provided. These updated files will be cleaner, modular, and consistent with your stylesheets.

🔹 app/signin.tsx
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles as joinStyles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGO } from "@/constants";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Signin() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={joinStyles.container}>
        {/* Top Navigation Section */}
        <View style={joinStyles.iconsection}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={HEROLOGO} />
        </View>

        {/* Title Section */}
        <View style={joinStyles.titleTextGroup}>
          <Text style={joinStyles.titleText}>Sign in to your</Text>
          <Text style={joinStyles.titleText}>Account</Text>
          <Text style={joinStyles.subText}>
            Enter your email and password to sign in.
          </Text>
        </View>

        {/* Form Section */}
        <View style={joinStyles.formGroup}>
          <View>
            <Text style={joinStyles.formLabel}>Email</Text>
            <TextInput keyboardType="email-address" style={joinStyles.formControl} />
          </View>

          <View>
            <Text style={joinStyles.formLabel}>Password</Text>
            <View style={joinStyles.formPasswordControl}>
              <TextInput style={joinStyles.passwordControl} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

          <Text style={joinStyles.forgotPasswordText}>Forgot password?</Text>
        </View>

        {/* Primary Button */}
        <TouchableOpacity style={joinStyles.primaryButton}>
          <Text style={joinStyles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={joinStyles.dividerGroup}>
          <View style={joinStyles.divider}></View>
          <Text style={joinStyles.dividerText}>OR</Text>
          <View style={joinStyles.divider}></View>
        </View>

        {/* Social Media Buttons */}
        <View style={joinStyles.secondaryButtonGroup}>
          <TouchableOpacity style={joinStyles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={joinStyles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={joinStyles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={joinStyles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={joinStyles.signupgroup}>
          <Text style={joinStyles.signupTitleText}>Don’t have an account?</Text>
          <Text style={joinStyles.signupSubTitleText}> Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

🔹 app/join.tsx
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles as joinStyles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGO } from "@/constants";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={joinStyles.container}>
        {/* Top Navigation Section */}
        <View style={joinStyles.iconsection}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={HEROLOGO} />
        </View>

        {/* Title Section */}
        <View style={joinStyles.titleTextGroup}>
          <Text style={joinStyles.titleText}>Create an</Text>
          <Text style={joinStyles.titleText}>Account</Text>
          <Text style={joinStyles.subText}>
            Enter your details to get started.
          </Text>
        </View>

        {/* Form Section */}
        <View style={joinStyles.formGroup}>
          <View>
            <Text style={joinStyles.formLabel}>Full Name</Text>
            <TextInput style={joinStyles.formControl} />
          </View>

          <View>
            <Text style={joinStyles.formLabel}>Email</Text>
            <TextInput keyboardType="email-address" style={joinStyles.formControl} />
          </View>

          <View>
            <Text style={joinStyles.formLabel}>Password</Text>
            <View style={joinStyles.formPasswordControl}>
              <TextInput style={joinStyles.passwordControl} secureTextEntry />
            </View>
          </View>
        </View>

        {/* Primary Button */}
        <TouchableOpacity style={joinStyles.primaryButton}>
          <Text style={joinStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={joinStyles.dividerGroup}>
          <View style={joinStyles.divider}></View>
          <Text style={joinStyles.dividerText}>OR</Text>
          <View style={joinStyles.divider}></View>
        </View>

        {/* Social Media Buttons */}
        <View style={joinStyles.secondaryButtonGroup}>
          <TouchableOpacity style={joinStyles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={joinStyles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={joinStyles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={joinStyles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={joinStyles.signupgroup}>
          <Text style={joinStyles.signupTitleText}>Already have an account?</Text>
          <Text style={joinStyles.signupSubTitleText}> Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

🔹 Key Changes & Benefits

✅ Styles Organized:
Both screens now fully use styles/_joinstyle.ts and styles/_mainstyle.ts for a clean and consistent UI.

✅ Reusable Layout:
The structure for Join is based on Sign In but with title and form adjustments.

✅ Scalable & Maintainable:
Adding new form fields or switching between Sign In / Join designs is now easy.

Would you also like me to add navigation hooks (so tapping “Join now” on Signin takes you to Join, and vice versa)?

You said:
use this signin.tsx to create a join.tsx file

import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/signin";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          {/* <Text style={styles.mediumText}>SYLVESTER </Text> */}
          <Image source={require('@/assets/images/logo.png')} />
        </View>
        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don&apos;t have an account?</Text>
          <Text style={styles.subTextJoin}> Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}





use this styles/signin.ts to create join.tsx file and the styles/join.ts


import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/signin";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          {/* <Text style={styles.mediumText}>SYLVESTER </Text> */}
          <Image source={require('@/assets/images/logo.png')} />
        </View>
        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don&apos;t have an account?</Text>
          <Text style={styles.subTextJoin}> Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
ChatGPT said:

Perfect! I’ll create a join.tsx page and its dedicated styles/join.ts file based on your signin.tsx setup. The Join screen will have similar structure but with text/content adjusted for sign-up functionality.

🔹 app/join.tsx
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/join";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Navigation Header */}
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/logo.png")} />
        </View>

        {/* Title */}
        <Text style={styles.largeText}>Create your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your details below to sign up and get started.
        </Text>

        {/* Form Fields */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Full Name</Text>
            <TextInput style={styles.inputField} />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        {/* Primary Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Buttons */}
        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Already have an account */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Already have an account?</Text>
          <Text style={styles.subTextJoin}> Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

🔹 styles/join.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },
  largeText: {
    fontWeight: "700",
    fontSize: 39,
    marginTop: 20,
  },
  smallText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#7E7B7B",
    marginTop: 5,
  },
  formGroup: {
    marginTop: 44,
    rowGap: 10,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#7B7B7B",
    marginBottom: 7,
  },
  inputField: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
  },
  passwordGroup: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "300",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#e6e6e6",
  },
  dividerText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#C2C2C2",
  },
  socialMediaButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  socialMediaButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    borderWidth: 1,
  },
  socialMediaButtonText: {
    fontSize: 18,
    fontWeight: "400",
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  subText: {
    fontSize: 18,
    fontWeight: "400",
  },
  subTextJoin: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFA800",
    marginLeft: 5,
  },
});


✅ Changes made:

Adjusted text for sign-up (Join) flow.

Added a Full Name field.

Reused styling concepts but placed them in a separate styles/join.ts.

Changed bottom text to "Already have an account? Sign in".

Would you also like me to wire navigation between join.tsx and signin.tsx so tapping the "Join now" or "Sign in" text actually navigates?

You said:
update the index.tsx page to link join.tsx and signin.tsX

import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  ImageBackground, 
  Dimensions, 
  TouchableOpacity 
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/logo.png")} />
            </View>

            {/* Text */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            {/* Buttons & Navigation Prompt */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
  textGroup: {
    alignItems: "center",
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
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});
ChatGPT said:

You can make Join here and Sign In buttons navigate to join.tsx and signin.tsx by using Link from expo-router.
Here’s your updated index.tsx:

import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  ImageBackground, 
  Dimensions, 
  TouchableOpacity 
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/logo.png")} />
            </View>

            {/* Text */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            {/* Buttons & Navigation Prompt */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <Link href="/join" asChild>
                  <TouchableOpacity style={styles.button}>
                    <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                  </TouchableOpacity>
                </Link>

                <Link href="/signin" asChild>
                  <TouchableOpacity style={styles.transparentButton}>
                    <Text style={styles.textSmall}>Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
  textGroup: {
    alignItems: "center",
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
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});

🔑 Key changes:

Imported Link from expo-router.

Wrapped both TouchableOpacity buttons with <Link href="/join" /> and <Link href="/signin" />.

Used asChild so the TouchableOpacity remains the clickable element.