import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Cheese() {
  return (
    <View>
    <Text>This is my Cheese page 🧀</Text>
    <Link href="/strawberry">Strawberry 🍓</Link>
  </View>
  )
}