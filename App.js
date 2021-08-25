import React from 'react';
import { Text, View, Image, StyleSheet, TextInput} from 'react-native';




function App() {
  return <View style={styles.container}>
    <Image source={require('./assets/mina.jpg')} style={styles.image} />

    <View style={styles.detailContainer}>
      <Text style={styles.firstLabel}>School</Text>
      <TextInput style={styles.labelText} />
    </View>

    <View style={styles.detailContainer}>
      <Text style={styles.firstLabel}>Email Address</Text>
      <TextInput style={styles.labelText} />
    </View>

    <View style={styles.detailContainer}>
      <Text style={styles.textColors}>Name</Text>
      <TextInput style={styles.labelText} />
    </View>

    <View style={styles.detailContainer}>
      <Text style={styles.textColors}>Nick Name</Text>
      <TextInput style={styles.labelText} />
    </View>

    <View style={[styles.detailContainer, styles.lastBox]}>
      <Text style={styles.textColors}>Emergency Contact</Text>
      <TextInput style={styles.labelText} />
    </View>

    <View style={styles.buttonBox}>
      <Text style={styles.buttonText}>UPDATE PROFILE</Text>
    </View>

  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "grey",
  },
  image: {
    marginTop: 40,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    alignSelf: "center"
  },
  detailContainer: {
    marginHorizontal: 50
  },

  labelText: {
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    fontSize: 20,
    marginVertical: 5
  },
  firstLabel: {
    color: "grey"
  },
  textColors: {
    color: "#1d87fb"
  },
  lastBox: {
    marginBottom: 30
  },
  buttonBox: {
    width: 260,
    height: 60,
    borderRadius:80,
    padding: 10,
    alignSelf:"center",
    backgroundColor: "#1d87fb",
    
  },
  buttonText: {
    color: "#ffff",
    textAlign: "center",
    padding: 10,
    fontSize: 20
  }

})

export default App;