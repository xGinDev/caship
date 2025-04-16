import { Redirect } from "expo-router";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header/Header";

export default function HomeScreen() {
  const { session, loading } = useAuth();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaView className="h-full flex flex-col gap-6 pb-28 pt-8 px-4">
      <Header />
    </SafeAreaView>
  );
}