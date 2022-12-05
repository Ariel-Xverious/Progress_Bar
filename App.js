import { Text, View, StyleSheet, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import { useState, useEffect } from 'react';

export default function App() {
  const [maxL, setMaxL] = useState(0);
  const [progress, setProgress] = useState(0);
  const [colourChange, setcolourChange] = useState();

  function handler(maxL) {
    setMaxL(maxL);
    console.log(maxL); if (maxL >= 100) {
      setProgress(maxL);
      setcolourChange('red');
    } else {
      setcolourChange('blue');
    }
    setProgress(maxL / 100);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        type="text"
        onChangeText={(value) => handler(value.length)}
        maxLength="100"
      />

      <Text> Max Length: {maxL} / 100 Characters </Text>
      <Text> Progress: {maxL}%</Text>

      <Progress.Bar
        style={{ fill: 'white' }}
        progress={progress}
        size={100}
        color={colourChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputBox: {
    height: 100,
    borderWidth: 3, 
    padding: 10,
    backgroundcolour: 'white',
  },
});
