import { Pressable, StyleSheet, Text, View } from 'react-native'

export const Button =({ children, onPress, }) => (
 <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{children}</Text>
 </Pressable>
 )
 

 const styles = StyleSheet.create({
    button: {
        backgroundColor: '#666633',
        borderRadius: 8,
        width: '50%',
        paddingHorizontal: 16,
        paddingVertical: 8,
    
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    
      },
 })
    