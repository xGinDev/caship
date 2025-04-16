import Logout from '@/components/Auth/Logout'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const Profile = () => {
    return (
        <SafeAreaView className='h-full'>
            <View className='h-full flex flex-col justify-between p-4 pb-8'>
                <View>
                    <Text className=''>Profile</Text>
                </View>
                <View>
                    <Logout />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile