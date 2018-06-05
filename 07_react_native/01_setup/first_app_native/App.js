import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {text: ''};
}
  render() {
    let pic = {
      uri:'http://24.media.tumblr.com/tumblr_lr8ng062t01qhwlspo1_500.jpg'
    };
    return (
      <View style={styles.container}>
        <View style={styles.tabHeader}>
          <Text style={styles.textHead}>Header</Text>
        </View>
        <View style={styles.content}>
          <Image source={{uri: 'https://image.freepik.com/free-photo/nice-blot-of-ink-in-water_1112-821.jpg'}}
          style={{width:200, height:200, marginLeft:110}}/>
          <Text style={styles.textContent}>Content</Text>
        </View>
        <View style={styles.bottomMenu}>
          <View style={{flex:1, width: 50, height: 70, backgroundColor: '#3975B2'}}>
            <Text style={styles.menuText}>Menu 1</Text>
          </View>
          <View style={{flex:1, width: 50, height: 70, backgroundColor: '#84C1FF'}}>
            <Text style={styles.menuText}>Menu 2</Text>
          </View>
          <View style={{flex:1, width: 50, height: 70, backgroundColor: '#6AB4FF'}}>
            <Text style={styles.menuText}>Menu 3</Text>
          </View>
        </View>
      </View>


    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between',
    flexDirection: 'column',

  },

  bottomMenu: {
    flexDirection:'row',
    alignItems: 'flex-end',
  },

  menuText: {
    textAlign: 'center',
    marginTop: 26,
    fontWeight: 'bold',
  },

  tabHeader: {
    height: 70,
    backgroundColor: '#9E54FF'

  },

  textHead: {
    textAlign: 'center',
    marginTop: 34,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  textContent: {
    textAlign: 'center',
    fontSize: 16,

  },


});
