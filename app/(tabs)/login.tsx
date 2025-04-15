import Auth from '@/components/Auth'
import React from 'react'
import { SafeAreaView } from 'react-native'

export default function Login() {
    return (
        <SafeAreaView className='h-full flex flex-col gap-6 pb-28 pt-8 px-4 bg-primary'>
            <Auth />
        </SafeAreaView>
    )
}