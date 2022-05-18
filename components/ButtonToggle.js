import React, {useState} from 'react';
import {Button} from 'react-native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handlePress = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Button title={toggle ? 'ON' : 'OFF'} onPress={handlePress} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>{toggle ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
  },
});

export default ButtonToggle;
