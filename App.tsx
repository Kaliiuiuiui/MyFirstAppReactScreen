import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    return(
      <View style={styles.container}>
       <Text style={styles.texto}>Meu Primeiro App</Text>
       <TextInput style={styles.input} placeholder="Qual seu Nome?"/>
       <Button title="Salvar"/>
      </View>
    );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30, 
    color: "#63208C",
  },

  container: {
    flex: 1,
    justifyContent: "Center",
    alignItems: "Center",
    backgroundColor: "#000000",
  },

  input: {
    backgroundColor: "#3827F5",
    textAlign: "Center",
    width: "60%",
    height: "5%",
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8B88A8",
    shadowColor: "#8B88A8",
    shadowRadius: 8,    
  },

});
