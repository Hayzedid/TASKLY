import { TouchableOpacity, View, Text, Alert, StyleSheet } from "react-native";
type props = {
    name: string;   
};
export function ShoppingListItem({name} : props) {
     const handleDelete = () => {
        Alert.alert(
         `Are you sure you want to delete this ?`,
          "This action cannot be undone.",
          [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
      
        );
      };
  return (
     <View style={styles.itemContainer} >
          <Text style={styles.itemText}>{name}</Text>
            <TouchableOpacity onPress={handleDelete} activeOpacity={0.8}  style={styles.button}>
              <Text style={styles.buttonText}> Delete </Text>
            </TouchableOpacity>
          </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#5C8C46',
        borderBottomColor: '#1a759f',
        borderBottomWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 4,
        marginHorizontal: 16,
  },
  itemText:{
    fontSize: 18, 
    fontWeight: "200"
  },
  button: {
    backgroundColor: "#0B2559",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    padding: 10,
    borderRadius: 8,
  }
});
