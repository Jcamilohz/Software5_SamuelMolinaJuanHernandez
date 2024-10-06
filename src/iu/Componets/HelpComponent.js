import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from '../../styles/styles';

const HelpComponent = ({
  navigation,
  descripcion,
  setDescripcion,
  handleSendRequest
}) => {
  return (
    <ScrollView>
      <Text style={styles.helpTitle}>¿Con qué podemos ayudarte?</Text>

      <View style={styles.helpSection}>
        <Text style={styles.helpSectionTitle}>Compras</Text>
        <Pressable 
          style={styles.helpOptionContainer}
          onPress={() => navigation.navigate('myBuys')}>
          <Text style={styles.helpOptionText}>Administrar y cancelar compras</Text>
          <Text style={styles.helpOptionDescription}>
            Pagar, seguir envíos, modificar, reclamar o cancelar compras.
          </Text>
        </Pressable>

        <Pressable 
          style={styles.helpOptionContainer}
          onPress={() => navigation.navigate('myBuys')}>
          <Text style={styles.helpOptionText}>Devoluciones y reembolsos</Text>
          <Text style={styles.helpOptionDescription}>
            Devolver un producto o consultar por reintegros de dinero de una compra.
          </Text>
        </Pressable>

        <Pressable 
          style={styles.helpOptionContainer}
          >
          <Text style={styles.helpOptionText}>Preguntas frecuentes sobre compras</Text>
        </Pressable>
      </View>

      <View style={styles.helpSection}>
        <Text style={styles.helpSectionTitle}>Descripción de la solicitud</Text>
        <TextInput
          style={styles.helpTextInput}
          multiline
          maxLength={300}
          placeholder="Describe tu solicitud..."
          placeholderTextColor={styles.headerTextInputPlaceholder}
          value={descripcion}
          onChangeText={setDescripcion}
        />
      </View>

      <Pressable style={styles.helpButton} onPress={handleSendRequest}>
        <Text style={styles.helpButtonText}>Enviar solicitud</Text>
      </Pressable>

      <Pressable style={styles.helpContactContainer}>
        <Text style={styles.helpContactText}>¿Necesitas más ayuda?</Text>
        <Text style={styles.helpContactLink}>Contáctanos</Text>
      </Pressable>
    </ScrollView>
  );
};

export default HelpComponent;
