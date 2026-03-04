import { useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Text>Settings</Text>
            <TouchableOpacity
            style={{
                backgroundColor: "#14F195",
                padding: 10,
                borderRadius: 10,
            }}
            onPress={()=>{
                router.push("/order")
            }}
            >
                <Text>My order</Text>
            </TouchableOpacity>

            <Pressable
            onPress={() => {
                router.push('/order')
            }}>
                <Text>My order</Text>
            </Pressable>
        </SafeAreaView>
    );
}