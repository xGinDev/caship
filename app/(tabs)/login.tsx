import Auth from '@/components/Auth/Auth'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useAppStore } from '@/context/AppContext';

export default function Login() {
    const { showLogin } = useAppStore();

    return (
        <SafeAreaView className={`h-full flex flex-col gap-6 pb-28 pt-8 px-4 ${showLogin ? 'bg-white' : 'bg-backgroundDark'}`}>
            <Auth />
        </SafeAreaView>
    )
}