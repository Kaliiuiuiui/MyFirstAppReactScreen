import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
    return(
      <View style={styles.container}>
       <Text style={styles.texto}>Meu Primeiro App</Text>
       <TextInput style={styles.input} placeholder="Qual seu Nome?"/>
       <TouchableOpacity style={styles.button}>
        <Text>Salvar</Text>
       </TouchableOpacity>
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
    backgroundColor: "#A752D1",
    textAlign: "Center",
    width: "60%",
    height: "5%",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8B88A8",
    shadowColor: "#48205C",
    shadowRadius: 20,    
  },

  button: {
    backgroundColor: "#F9F2FF",
    width: "15%",

  },

});
