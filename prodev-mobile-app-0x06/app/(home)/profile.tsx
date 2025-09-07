// import { View, Text, Image, Pressable } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import Feather from "@expo/vector-icons/Feather";
// import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import Ionicons from "@expo/vector-icons/Ionicons";

// const Profile = () => {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView className="flex-1 p-4">
//         <Text className="text-black text-4xl font-normal mb-6">Profile</Text>
//         <View className="bg-[#34967C] h-[90px] mb-10 flex-row items-center rounded-md justify-between px-7">
//           <View className="flex-row items-center gap-4">
//             <Image source={require("@/assets/images/user-image.png")} />
//             <View>
//               <Text className="font-semibold text-xl text-white">Cole Baidoo</Text>
//               <Text className="text-sm font-thin text-white">@block_cs</Text>
//             </View>
//           </View>
//           <Feather name="edit-3" size={24} color="white" />
//         </View>

//         <View className="h-[350px] gap-3 bg-white rounded-md p-4 mb-4">
//           <ProfileItem
//             title="My Account"
//             subtitle="Make Changes to your account"
//             icon={<FontAwesome6 name="user" size={24} color="#0601B4" />}
//           />
//           <ProfileItem
//             title="Saved Beneficiary"
//             subtitle="Manage your saved accounts"
//             icon={<FontAwesome6 name="user" size={24} color="#0601B4" />}
//           />
//           <ProfileItem
//             title="Face ID / Touch ID"
//             subtitle="Make Changes to your account"
//             icon={<Ionicons name="lock-closed-outline" size={24} color="#0601B4" />}
//           />
//           <ProfileItem
//             title="Two-Factor Authentication"
//             subtitle="Further secure your account for safety"
//             icon={<Ionicons name="shield-checkmark-outline" size={24} color="#0601B4" />}
//           />
//           <ProfileItem
//             title="Log out"
//             subtitle="Further secure your account for safety"
//             icon={<MaterialIcons name="logout" size={24} color="#0601B4" />}
//           />
//         </View>

//         <Text className="text-black text-xl font-normal mb-6">More</Text>
//         <View className="h-[139px] gap-3 bg-white rounded-md p-4 mb-4">
//           <ProfileItem
//             title="My Account"
//             subtitle="Make Changes to your account"
//             icon={<FontAwesome6 name="user" size={24} color="#0601B4" />}
//           />
//           <ProfileItem
//             title="Saved Beneficiary"
//             subtitle="Manage your saved accounts"
//             icon={<FontAwesome6 name="user" size={24} color="#0601B4" />}
//           />
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const ProfileItem = ({ title, subtitle, icon }: any) => (
//   <Pressable className="flex-row items-center justify-between mb-2">
//     <View className="flex-row items-center gap-4">
//       <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
//         {icon}
//       </View>
//       <View>
//         <Text className="text-lg font-semibold mb-2">{title}</Text>
//         <Text className="font-thin text-gray-700">{subtitle}</Text>
//       </View>
//     </View>
//     <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
//   </Pressable>
// );

// export default Profile;



















//v2

// import { View, Text, Image, Pressable, ScrollView } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import Feather from "@expo/vector-icons/Feather";
// import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import Ionicons from "@expo/vector-icons/Ionicons";

// const Profile = () => {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView className="flex-1 bg-[#F5F5F5]">
//         <ScrollView
//           className="flex-1"
//           contentContainerStyle={{ paddingBottom: 50, paddingHorizontal: 16 }}
//         >
//           {/* Header */}
//           <Text className="text-black text-4xl font-normal mb-6">Profile</Text>

//           {/* Profile Card */}
//           <View className="bg-[#34967C] h-[100px] mb-8 flex-row items-center rounded-xl justify-between px-6 shadow-sm">
//             <View className="flex-row items-center gap-4">
//               <Image
//                 source={require("@/assets/images/user-image.png")}
//                 className="w-14 h-14 rounded-full"
//               />
//               <View>
//                 <Text className="font-semibold text-xl text-white">
//                   Cole Baidoo
//                 </Text>
//                 <Text className="text-sm text-white opacity-90">@block_cs</Text>
//               </View>
//             </View>
//             <Feather name="edit-3" size={22} color="white" />
//           </View>

//           {/* Account Settings */}
//           <View className="bg-white rounded-2xl mb-6 shadow-sm">
//             <ProfileItem
//               title="My Account"
//               subtitle="Make changes to your account"
//               icon={<FontAwesome6 name="user" size={22} color="#4C4DDC" />}
//             />
//             <ProfileItem
//               title="Saved Beneficiary"
//               subtitle="Manage your saved accounts"
//               icon={<FontAwesome6 name="user" size={22} color="#4C4DDC" />}
//             />
//             <ProfileItem
//               title="Face ID / Touch ID"
//               subtitle="Secure login options"
//               icon={<Ionicons name="lock-closed-outline" size={22} color="#4C4DDC" />}
//             />
//             <ProfileItem
//               title="Two-Factor Authentication"
//               subtitle="Further secure your account"
//               icon={<Ionicons name="shield-checkmark-outline" size={22} color="#4C4DDC" />}
//             />
//             <ProfileItem
//               title="Log out"
//               subtitle="Sign out of your account"
//               icon={<MaterialIcons name="logout" size={22} color="#4C4DDC" />}
//             />
//           </View>

//           {/* More Section */}
//           <Text className="text-black text-xl font-medium mb-3">More</Text>
//           <View className="bg-white rounded-2xl shadow-sm">
//             <ProfileItem
//               title="Help & Support"
//               subtitle="Get assistance"
//               icon={<Ionicons name="notifications-outline" size={22} color="#4C4DDC" />}
//             />
//             <ProfileItem
//               title="About App"
//               subtitle="App version and details"
//               icon={<Ionicons name="heart-outline" size={22} color="#4C4DDC" />}
//             />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const ProfileItem = ({ title, subtitle, icon }: any) => (
//   <Pressable className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100 last:border-b-0">
//     <View className="flex-row items-center gap-4">
//       <View className="w-12 h-12 bg-[#4C4DDC]/10 items-center justify-center rounded-full">
//         {icon}
//       </View>
//       <View>
//         <Text className="text-base font-semibold">{title}</Text>
//         {subtitle ? (
//           <Text className="text-sm text-gray-500">{subtitle}</Text>
//         ) : null}
//       </View>
//     </View>
//     <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
//   </Pressable>
// );

// export default Profile;



























import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Header */}
      <Text style={styles.header}>Profile</Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          // source={{ uri: "https://i.pravatar.cc/150?img=47" }}
          source={require("@/assets/images/user-image.png")}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Cole Baidoo</Text>
          <Text style={styles.username}>@block_cs</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <MaterialIcons name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Account Options */}
      <View style={styles.section}>
        <OptionItem
          icon="person-outline"
          label="My Account"
          subLabel="Make changes to your account"
        />
        <OptionItem
          icon="bookmark-outline"
          label="Saved Beneficiary"
          subLabel="Manage your saved accounts"
        />
        <OptionItem
          icon="lock-closed-outline"
          label="Face ID / Touch ID"
          subLabel="Secure your device login"
        />
        <OptionItem
          icon="shield-checkmark-outline"
          label="Two-Factor Authentication"
          subLabel="Extra security for your account"
        />
        <OptionItem
          icon="log-out-outline"
          label="Log out"
          subLabel="Sign out of your account"
        />
      </View>

      {/* More Section */}
      <Text style={styles.sectionTitle}>More</Text>
      <View style={styles.section}>
        <OptionItem
          icon="notifications-outline"
          label="Help & Support"
          subLabel="Get assistance and FAQs"
        />
        <OptionItem
          icon="heart-outline"
          label="About App"
          subLabel="Learn about this application"
        />
      </View>
    </ScrollView>
  );
}

function OptionItem({ icon, label, subLabel }: { icon: any; label: string; subLabel: string }) {
  return (
    <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
      <View style={styles.optionLeft}>
        <View style={styles.iconWrapper}>
          <Ionicons name={icon} size={22} color="#5A5AE6" />
        </View>
        <View>
          <Text style={styles.optionLabel}>{label}</Text>
          {subLabel ? <Text style={styles.optionSub}>{subLabel}</Text> : null}
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#888" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    marginVertical: 20,
    color: "#222",
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#34967C",
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  username: {
    fontSize: 14,
    color: "#e0e0e0",
  },
  editButton: {
    backgroundColor: "#2E7D32",
    padding: 8,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    marginTop: 10,
    color: "#333",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 4,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#5A5AE620",
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  optionSub: {
    fontSize: 13,
    color: "#777",
  },
});
