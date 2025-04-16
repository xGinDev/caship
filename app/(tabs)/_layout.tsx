import { useI18n } from '@/hooks/use18n';
import { useAuth } from '@/hooks/useAuth';
import { Tabs } from 'expo-router';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const { session, loading } = useAuth();
  const { t } = useI18n();

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarStyle: {
          /* height: 70, */
          display: session ? 'flex' : 'none'
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t.tabBar.home,
          tabBarIcon: () => (
            <AntDesign
              name="home"
              size={25}
              color={'#000'}
            />
          )
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: session && null
        }}
      />
      <Tabs.Screen
        name="movements"
        options={{
          title: t.tabBar.movements,
          tabBarIcon: () => (
            <Ionicons
              name="wallet-outline"
              size={25}
              color={'#000'}
            />
          )
        }}
      />
      <Tabs.Screen
        name="savings-goals"
        options={{
          title: t.tabBar.savingsGoals,
          tabBarIcon: () => (
            <FontAwesome
              name="dollar"
              size={25}
              color={'#000'}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t.tabBar.profile,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={25}
              color={'#000'}
            />
          )
        }}
      />
    </Tabs>
  );
}
