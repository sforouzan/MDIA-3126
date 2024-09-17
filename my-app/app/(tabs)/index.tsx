import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function MainPage() {
  return (
    <View>
    <Text>This is my index page :)</Text>
    <Link href="/strawberry">Strawberry 🍓</Link>
    <Link href="/cheese">Cheese 🧀</Link>
  </View>
  ) 
}