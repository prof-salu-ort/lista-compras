import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarItem(){

    if(item.trim() === '' || quantidade.trim() === ''){
      return;
    }

    const novoItem = {
      id : String(Date.now()),
      nome : item,
      quantidade : quantidade
    }

    //lista.push(novoItem);

    //Adiciona um novo item
    setLista([...lista, novoItem]);

    console.log(lista);

    setItem('');
    setQuantidade('');
  }

  function removerItem(id){
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Item' style={styles.input}
                 onChangeText={setItem} value={item}/>

      <TextInput placeholder='Quantidade' style={styles.input}
                 onChangeText={setQuantidade} value={quantidade}/>

      <Button title='Gravar' onPress={adicionarItem}/>

      <FlatList 
        data={lista}
        keyExtractor={id => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item.nome} - {item.quantidade}</Text>
            <Button title='Apagar' color={'red'} onPress={() => removerItem(item.id)}/>
          </View>
  )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  }, item: {
    flexDirection: 'row', padding: 10, alignItems: 'center'
  }, texto: { 
    fontSize: 16, marginRight: 10, 
  }, input: {
    borderWidth: 1, padding: 5, marginBottom: 10,
  }
});
