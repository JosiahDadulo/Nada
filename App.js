import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Start of Nada! Let's get this going!</Text>
      {/*Icon to go and edit users profile*/}
      {/* Reel System*/}
      {/*Profiles to match with*/}
      {/*Reel System*/} 
      {/*Task bar in lower app which includes button to go back to profiles and another
      to see profiles that sent a response to users profile*/}
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
});
