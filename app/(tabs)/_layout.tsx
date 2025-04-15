import { useAuth } from '@/hooks/useAuth';
import { Tabs } from 'expo-router';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function TabLayout() {
  const { session, loading } = useAuth();

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: session ? 'flex' : 'none'
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: session && null
        }}
      />
    </Tabs>
  );
}
