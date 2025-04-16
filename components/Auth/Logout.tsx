import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, TouchableOpacity } from 'react-native';
import { useI18n } from '@/hooks/use18n';
import { supabase } from '@/utils/supabase';
import { deleteSession } from '@/utils/database';

const Logout = () => {
    const { t } = useI18n();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        await deleteSession();
    }

    return (
        <TouchableOpacity onPress={handleLogout} className='flex flex-row items-center gap-4'>
            <MaterialIcons name="logout" size={24} color="#8043D1" />
            <Text className='font-semibold'>{t.auth.logout}</Text>
        </TouchableOpacity>
    )
}

export default Logout