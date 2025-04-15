import { Redirect } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import { useAuth } from "@/hooks/useAuth";

export default function HomeScreen() {
  const { session, loading } = useAuth();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Text>Bienvenido {session.user?.email}</Text>
    </View>
  );
}