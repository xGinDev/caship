import { useI18n } from "@/hooks/use18n";
import { Text, TouchableOpacity, View } from "react-native";

export default function Auth() {
    const { t } = useI18n();

    return (
        <View className='h-full flex flex-col justify-end bg-primary w-full'>
            <Text className='font-bold text-3xl w-full text-center text-white'>
                {t.auth.title}
            </Text>
            <Text className='text-center mt-2 italic w-full text-white'>
                {t.auth.subtitle}
            </Text>
            <View className="w-full mb-4">
                <TouchableOpacity className="bg-white rounded-lg p-5 mt-8 mb-4 w-3/4 mx-auto">
                    <Text className="text-center text-black">{t.auth.createAccount}</Text>
                </TouchableOpacity>
                <View className="flex flex-row items-center justify-center gap-2">
                    <Text className="text-white">{t.auth.haveAccount}</Text>
                    <TouchableOpacity>
                        <Text className="text-white font-bold">{t.auth.login}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}