import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/join";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter(); // For back navigation

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Navigation Header */}
        <View style={styles.navGroup}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="arrow-back" size={25} />
          </TouchableOpacity>
          <Image source={require("@/assets/images/logo.png")} />
        </View>

        {/* Title */}
        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        {/* Form Fields */}
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

        {/* Primary Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
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

        {/* Sign Up Navigation */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don&apos;t have an account?</Text>
          <Link href="/join">
            <Text style={styles.subTextJoin}> Join now</Text>
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
