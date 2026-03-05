import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
    color: "#000000",
  },

  container: {
    flex: 1,
    justifyContent: "Center",
    alignItems: "Center",
    backgroundColor: "#864DC4",
  },

  input: {
    backgroundColor: "#EFD5F7",
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
    borderWidth: 1,
    borderColor: "#9662B5",
    width: "40%",
    paddingVertical: 9,
    alignItems: "center",
    backgroundColor: "#53158C",
    borderRadius: 20,
    shadowRadius: 25,
    shadowColor: "#8453AD",

  },

});
