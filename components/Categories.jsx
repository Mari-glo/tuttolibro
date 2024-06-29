import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/categorias_libros.json';
import CategoryItem from './categoryItem';

export const Categories = () => {
  
    <View style ={styles.container}>
        <FlatList style={styles.container} 
        renderItem={({item}) => <CategoryItem category={item}/>}
        data= {categories}
        keyExtractor={category => category} />
      
    </View>
  
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
    }
})