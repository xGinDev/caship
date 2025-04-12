import Auth from '@/components/Auth'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
    return (
        <SafeAreaView className='h-full flex flex-col gap-6 pb-28 pt-8 px-4'>
            <LinearGradient
                colors={['rgba(152,86,254,0.8)', 'white']}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />
            <Auth />
        </SafeAreaView>
    )
}