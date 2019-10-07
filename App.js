import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data : [
        {text:'Work', checked: false},
        {text:'Swim', checked: false},
        {text:'Study', checked: false},
        {text:'Sleep', checked: false},
        {text:'Run', checked: false}
    ],
      notetext: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.create}>
          <TextInput
          onChangeText={(notetext) => {this.setState({notetext: notetext})}}
          placeholder="New To do"
          style={styles.textInput}
          value= {this.state.notetext}
          />
          <TouchableOpacity style={styles.btnadd} onPress={() => {this.addTodo()}}>
            <Text style={styles.addtext}>Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {this.state.data.map((val, index) =>{
            return (
              <View key={index} style={styles.list}>
                <Text style={styles.Text}>{val.text}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    );
  }
  addTodo(){
    if(this.state.notetext){
      const joined = this.state.data.concat(this.state.notetext);
      this.state.data.push({
        text: this.state.notetext,
        checked: false
      })
      this.setState({data: this.state.data})
    }
    this.setState({notetext: ''})
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  addtext:{
    fontSize: 18,
  },
  Text:{
    flex:1,
    fontSize: 19,
    alignSelf: 'center',
  },
  list: {
    borderBottomWidth : 1,
    borderBottomColor: '#ededed',
    paddingTop: 10,
    paddingRight:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput:{
    flex: 1,
    alignItems: 'stretch',
    borderWidth: 0.5,
    borderColor: 'black',
    borderStyle: 'solid',
    marginRight: 10,
  },
  create:{
    paddingLeft: 10,
    flexDirection : 'row',
    justifyContent: 'space-between'
  },
  iconbtn:{
    flex: 1,
    padding: 10,
    paddingRight: 0
  },
  btnadd: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    borderStyle: 'solid',
    fontSize: 18,
    marginRight: 10,
  },
})
