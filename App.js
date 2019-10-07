import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';


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
    }
  }
  render() {
    return (
      <View style={styles.container}>
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
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
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
})
