import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="Index" options={{
          drawerLabel: "Principal", headerTitle: "Principal", drawerIcon: () => <Ionicons 
          name="home-outline" 
          size={ 20}
          color= "black" />
        }} />

        <Drawer.Screen name="List" options={{ drawerLabel: "Listagem", headerTitle: "Principal", drawerIcon: () => <Ionicons 
          name="list-outline" 
          size={ 20}
          color= "black" /> }} />

        <Drawer.Screen name="Payment" options={{ drawerLabel: "Pagamentos", headerTitle: "Principal", drawerIcon: () => <Ionicons 
          name="code-download-sharp" 
          size={ 20}
          color= "black" /> }} />
      </Drawer>

    </GestureHandlerRootView>
  );
};

export default function Layout() {
  return DrawerLayout();
}
