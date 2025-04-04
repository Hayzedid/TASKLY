import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View , } from 'react-native';
import { ShoppingListItem } from './components/ShoppingListItem';

export default function App() {

  return (
    <View style={styles.container}>
   <ShoppingListItem name="Coffee"/>
   <ShoppingListItem name="Tea"/>
   <ShoppingListItem name="Sugar"/> 
   <ShoppingListItem name="Garri"/>
   <ShoppingListItem name="Groundnut "/>
   <ShoppingListItem name="Omi tutu "/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
  },

});
