import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dados: {
        id: 1,
        nome: "jose"
      }
    }
    this._mudarNome = this._mudarNome.bind(this);
  }
  _mudarNome(){
    this.setState({dados: {id: 1, nome: "joao"}});
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box2} >
      <Text style={styles.nome}  > {this.state.dados.nome} </Text>
      <Button onPress={this._mudarNome} title="mudar nome" color="#ff0000" />
      </View>
      <View style={styles.box3} >
        <View style={styles.subbox} />
        <View style={styles.subbox} />
        <View style={styles.subbox} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  box: {
    flex: 2,
    backgroundColor: 'steelblue',
    margin: 4,
  },
  box2: {
    flex: 7,
    backgroundColor: 'steelblue',
    margin: 4,
  },
  box3: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    margin: 4,
  },
  subbox: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 2
  },
  nome: {
    fontSize: 24
  }
});
