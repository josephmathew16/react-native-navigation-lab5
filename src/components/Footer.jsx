import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text>© Joseph Mathew</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Footer;
