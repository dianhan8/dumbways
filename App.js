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
                <TouchableOpacity style={styles.checked} onPress={() => {this.checked(index)}}>
                  <CheckBox
                  value={val.checked}
                  />
                </TouchableOpacity>
                  <Text style={styles.Text}>{val.text}</Text>
                <Icon.Button
                  color= 'red'
                  backgroundColor= 'white'
                  style={styles.iconbtn}
                  name="delete"
                  size= {30}
                  onPress={() => {this.deleteTodo(index)}}
                >
                </Icon.Button>
              </View>
            )
          })}
        </ScrollView>
      </View>
    );
  }
  addTodo(){
    if(this.state.notetext){
      this.state.data.push({
        text: this.state.notetext,
        checked: false
      })
      this.setState({data: this.state.data})
    }
    this.setState({notetext: ''})
  }
  deleteTodo(index){
    this.state.data.splice(index, 1)
    this.setState({data : this.state.data})
  }
  checked(index){
    const array = [...this.state.data]
    if(array[index].checked == false){
      this.state.data.push({
        text: array[index].text,
        checked: true
      })
      this.setState({data: this.state.data})
    }else{
      this.state.data.push({
        text: array[index].text,
        checked: false
      })
      this.setState({data: this.state.data})
    }
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
  checked:{
    alignSelf: 'center'
  },
  btnadd: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    borderStyle: 'solid',
    fontSize: 18,
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
  iconbtncheck:{
    flex: 1,
    padding: 10,
    paddingRight: 10
  }
})
