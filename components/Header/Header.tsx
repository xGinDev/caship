import React from 'react'
import { Image, Text, View } from 'react-native'

const Header = () => {
    return (
        <View className="flex flex-row gap-2 mx-5 mt-6 rounded-lg py-4 px-6 shadow-sm shadow-primary/30 bg-white">
            <Image source={require('@/assets/images/logo.png')} className="w-12 h-12 rounded-full" />
            <View>
                <Text className='text-xs'>Buenos días!</Text>
                <Text className='text-lg font-semibold'>John Doe</Text>
            </View>
        </View>
    )
}

export default Header