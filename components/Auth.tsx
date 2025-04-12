import React, { useState } from 'react'
import { Text, TextInput, View, Alert, TouchableOpacity } from 'react-native'
import { supabase } from '../utils/supabase'

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        setLoading(false)
    }

    async function signUpWithEmail() {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    }

    return (
        <View className=' h-full flex flex-col justify-center items-center gap-8'>
            <View>
                <Text className='font-bold text-3xl text-white'>¡Bienvenido a Caship!</Text>
                <Text className='text-white text-center mt-2 italic'>Comparte metas, no deudas.</Text>
            </View>
            <View>
                <Text className='text-white'>Inicia sesión o crea una cuenta para continuar</Text>
                <View className='flex flex-col gap-4 mt-8'>
                    <TextInput
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder="email@address.com"
                        autoCapitalize={'none'}
                        className='border border-white rounded-md py-3 px-4 bg-white'
                    />
                    <TextInput
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholder="Contraseña"
                        secureTextEntry
                        className='border border-white rounded-md py-3 px-4 bg-white'
                    />
                </View>
                <View className='flex flex-col gap-4 mt-8'>
                    <TouchableOpacity
                        onPress={signInWithEmail}
                        className='rounded-md py-3 px-4 bg-backgroundDark'
                    >
                        <Text className='text-white text-center font-semibold'>Iniciar sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={signUpWithEmail}
                        className='rounded-md py-3 px-4 bg-backgroundDark'
                    >
                        <Text className='text-white text-center font-semibold'>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}