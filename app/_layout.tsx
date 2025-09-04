import { Stack } from "expo-router";
import React from "react";

export default function RootLayout(): React.JSX.Element {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "ultralight",
        },
        headerShown: false, // esconde completamente o header
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="thebq" />
    </Stack>
  );
}
