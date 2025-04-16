import { useI18n } from '@/hooks/use18n'
import React from 'react'
import { Text, View } from 'react-native'

const Login = () => {
    const { t } = useI18n();

    return (
        <View className='h-full flex flex-col justify-between bg-white w-full'>
            <Text className='font-bold text-3xl w-full text-center'>
                {t.login.title}
            </Text>
        </View>
    )
}

export default Login