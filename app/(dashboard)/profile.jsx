import { StyleSheet, Text, View } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { useUser } from "../../hooks/useUser";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  const { logout } = useUser();

  const { user } = useUser();

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.heading}>
        Your Email
      </ThemedText>

      {user && (
        <>
          <Spacer />
          <ThemedText style={styles.heading}>{user.email}</ThemedText>
        </>
      )}
      <Spacer />
      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />
      <ThemedButton onPress={logout}>
        <ThemedText style={styles.btnText}>Logout</ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnText: {
    color: "#fff",
  },
});
