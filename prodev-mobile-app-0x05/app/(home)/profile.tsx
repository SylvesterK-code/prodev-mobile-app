// import { View, Text } from "react-native";

// const Profile = () => {
//   return (
//     <View>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// };

// export default Profile;


import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function profile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Profile</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
});
