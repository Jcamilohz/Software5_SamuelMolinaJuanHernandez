import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import OptionComponent from '../Componets/OptionComponent';

const OptionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainBackground}>
      <OptionComponent navigation={navigation} />
    </SafeAreaView>
  );
};

export default OptionScreen;
