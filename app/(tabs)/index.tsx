import { Image, StyleSheet, Platform, TextInput, Pressable, Alert } from 'react-native';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import {Button} from '../../components/button';

export default function App() {
  const [title, setTitle] = useState ('TuttoLibro')
  const handlePress = () => {
    setTitle ('a Leer!')
  }
  return (
    
        
  
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#cccc99', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/libro_inicio.png')}
          style={styles.imagInicio}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{title}</ThemedText>
        
      </ThemedView>
      <View>
      <Text style={styles.text}>En esta App podrás:</Text>
        
          
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Comprar Libros 
          
        </Text>
        
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Intercambiar libros</Text>
        
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Arrendar Libros</Text>      
          
      </View>
      <Button onPress={handlePress} >
        Descubrir
      </Button>
    </ParallaxScrollView>
  

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textContainer: {
    gap: 8,
    marginBottom: 8,
  },
  text:{
    fontSize: 24,
    color: '#999999',
  },
  

  imagInicio: {
    height: 240,
    width: 350,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
