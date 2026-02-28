
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ContadorBtn from './components/contadorBtn';

export default function App() {


 const [contador, setContador] = useState(0);
 const [historial, setHistorial] = useState([]);

const getColor =() => {

  if (contador > 0) {
    return '#763de7';
  } else if (contador < 0) {
    return '#ef0d0d';
  } else {
    return '#ffffff';
  }
};


  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, { color: getColor() }]}>Contador App</Text>
      <Text style={[styles.numeracion, { color: getColor() }]}> {contador} </Text>
      <ContadorBtn 
        label="+ 1" 
        position="izquierda" 
        onPressProp={() => {
          setContador(contador + 1);
          setHistorial([...historial, contador + 1]);
        }}
        onLongPressProp={() => setContador(0)}
        />

      <ContadorBtn 
        label="- 1" 
        position="derecha" 
        onPressProp={() => {
          setContador(contador - 1);
          setHistorial([...historial, contador - 1]);
        }}
        onLongPressProp={() => setContador(0)}
        />

        <Text style={[styles.tituloFotter, { color: getColor() }]}>Historial</Text>
      
          <Text style={[styles.historialItem, { color: getColor() }]}>
            {historial.join(', ')}
          </Text>
  

      <StatusBar style="light" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloFotter: {
    position: 'absolute',
    bottom: 240,
    fontSize: 32,
    color: '#1e90ff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },

    titulo: {
    position: 'absolute',
    top: 60,
    fontSize: 32,
    color: '#1e90ff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  numeracion: {
    fontSize: 240,
    fontWeight: 'bold',
  },
  historialItem: {
    position: 'absolute',
    bottom: 140,
    fontSize: 20,
    color: '#1e90ff',
    fontWeight: 'bold',
  },

});
