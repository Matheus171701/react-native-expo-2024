import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';

export default function App() {
  const { signIn, signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Text>App tcc</Text>
      <Button title='signIn Super' onPress={() => signIn({ email: "super@email.com", password: "super123!" })} />
      <Button title='signIn Adm' onPress={() => signIn({ email: "adm@email.com", password: "Adm123!" })} />
      <Button title='signOut Super' onPress={() => signOut()} />
      <Button title='signOut Adm' onPress={() => signOut()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "regular"
  }
});
