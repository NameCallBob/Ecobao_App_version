import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';


function AccountItem({ iconName, text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemView}>
        <FontAwesomeIcon name={iconName} size={30} />
        <Text style={styles.itemText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50,
  },
  itemText: {
    fontSize: 25,
    marginLeft: 20,
  },
});

export default AccountItem;