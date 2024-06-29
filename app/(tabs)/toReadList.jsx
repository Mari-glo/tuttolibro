import Ionicons from '@expo/vector-icons/Ionicons';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, StyleSheet, Platform, TextInput, Pressable, Alert } from 'react-native';
import { View, Text, Modal } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { useState } from 'react';
import {Button} from '../../components/button';


export default function TabTwoScreen() {

  const [newRead, setNewRead] = useState('')
  const [reads, setReads] = useState([])
  const [modVisible, setModVisible] = useState(false)

  const handlePress = () => {
    if (newRead == '') {
      Alert.alert('Error', 'no agregaste nada')
      return
    }
    setModVisible(true)
  }
  const handleText = nextText => {
    setNewRead(nextText)
  }
  const handleModal = () => {
    setModVisible(modVisible => !modVisible)
  }
  const confirmRead =() => {
    setReads(prevReads => [...prevReads, newRead])
    setNewRead('')
    setModVisible (false)

  }
    
  

  return (



    <ParallaxScrollView
      headerBackgroundColor={{ light: '#cccc99', dark: '#1D3D47' }}
      headerImage={
        <Image source={require('@/assets/images/libro_lista.png')} style={styles.imagLista} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Lecturas pendientes:</ThemedText>
      </ThemedView>
      <View style={styles.readAdder}>
        <View style={styles.input}>
          <Text style={styles.text}>por leer:</Text>
          <TextInput style={styles.inputValue} value={newRead} onChangeText={setNewRead} />

        </View>
        <Button onPress={handlePress}>Add</Button>
        <View style={styles.textContainer}>
          <Text>Lista de Leer</Text>
          <View>
            {reads.length > 0 ? (
              <>
                {reads.map(read => (
                  <Text key={read}>{read}</Text>

                ))}
              </>
            ) : (
              <Text>No ha agregado libros a su lista</Text>
            )}
          </View>
        </View>
        <Modal
        animationType ='slide'
        visible = {modVisible}
        onRequestClase={handleModal}
        >
          <View
          style={{
            alignItems:'center',
            justifyContent:'center',
            paddingTop: 180,
          }}>
            <Text>Estas seguro de agregar este Libro?: {newRead} </Text>
            <Button onPress={confirmRead}>Add</Button>
            <Button onPress={handleModal}>Cancelar</Button>
          </View>

        </Modal>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    gap: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#999999',
  },
  
  readAdder: {
    flexDirection: 'row',
    width: '100%',
    
  },
  input: {
    gap: 0.5,
    width: '80%', 
    
    
  },
  inputValue: {
    backgroundColor: '#cccc99',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
       
    height: 46,

  },


  imagLista: {
    height: 240,
    width: 380,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
