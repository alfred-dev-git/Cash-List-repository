import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

            <Text>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                style={{
                    borderWidth: 1,
                    marginBottom: 10,
                    padding: 10,
                    borderRadius: 8,
                }}
            />

            <Text>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
                style={{
                    borderWidth: 1,
                    marginBottom: 20,
                    padding: 10,
                    borderRadius: 8,
                }}
            />

            <TouchableOpacity
                style={{
                    backgroundColor: "black",
                    padding: 15,
                    borderRadius: 8,
                }}
            >
                <Text style={{ color: "white", textAlign: "center" }}>
                    Ingresar
                </Text>
            </TouchableOpacity>
        </View>
    );
}