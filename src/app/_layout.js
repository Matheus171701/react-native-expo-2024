import { Stack, useSegments, router } from "expo-router"
import { AppProvider } from "../hooks"
import { useEffect } from "react";

export default function Layout() {
const {user} =useAuth();
const segments = useSegments();

useEffect(() => {
      const inAuthGroup =segments [0]
}, [user])
return <AppProvider>
      <Stack /> 
      </AppProvider>
}