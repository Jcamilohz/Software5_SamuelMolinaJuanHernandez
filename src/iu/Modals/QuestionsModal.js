import React from 'react';
import { View, Text, Modal, ScrollView, TextInput, Pressable } from 'react-native';
import styles from '../../styles/styles';
import questionData from '../../data/QuestionData';
import personData from '../../data/PersonData';

const QuestionModal = ({ modalVisible, setModalVisible, onSubmit, productId }) => {
  const questions = questionData.filter(question => question.productId === productId);
  const getPersonById = (personId) => personData.find(person => person.id === personId); 

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.modalBackgroundmfp}>
        <View style={styles.modalContainermfp}>
          <Text style={styles.modalTitlemfp}>Preguntas</Text>
          <ScrollView>
            {questions.length > 0 ? (
              questions.map(question => {
                const person = getPersonById(question.personId);
                return (
                  <View key={question.id} style={styles.commentContainer}>
                    <Text style={styles.text}>{person.name} ({question.questionDate})</Text>
                    <Text style={styles.commentText}>{question.question}</Text>
                    <Text style={styles.commentScore}> ({question.answerDate}) Respuesta del vendedor: {question.answer}</Text>
                  </View>
                );
              })
            ) : (
              <Text style={styles.textSmall}>No hay preguntas disponibles.</Text>
            )}
          </ScrollView>
          <TextInput 
            style={styles.input} 
            placeholder="Escribe tu Pregunta..." 
            placeholderTextColor={styles.headerTextInputPlaceholder}  
          />
          <Pressable style={styles.button} onPress={() => { setModalVisible(false); onSubmit && onSubmit(); }} >
            <Text style={styles.text}>Enviar Pregunta</Text>
          </Pressable>
          <Pressable style={styles.modalCloseButtonmfp} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalCloseButtonTextmfp}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default QuestionModal;
