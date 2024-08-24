import React from 'react';
import { View, Text, Modal, ScrollView , TextInput,Pressable} from 'react-native';
import styles from '../../styles/styles';
import { getQuestionByProductId } from '../../controller/QuestionController';
import { getPersonById } from '../../controller/PersonController';




const QuestionModal = ({ modalVisible, setModalVisible, onSubmit, productId }) => {
  const questions = getQuestionByProductId(productId);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.text}>Preguntas</Text>
          <ScrollView>
            {questions.length > 0 ? (
              questions.map(question => {
                const person = getPersonById(question.personId);
                return (
                  <View key={question.id} style={styles.commentContainer}>
                    <Text style={styles.text}>{person.name} ({question.questionDate})</Text>
                    <Text style={styles.commentText}>{question.question}</Text>
                    <Text style={styles.commentScore}> ({question.answerDate}) respuesta del Vendedor : {question.answer}</Text>

                  </View>
                );
              })
            ) : (
              <Text style={styles.textSmall}>No hay preguntas disponibles.</Text>
            )}
          </ScrollView>
          <TextInput style={styles.input} placeholder="Escribe tu Pregunta..." placeholderTextColor={styles.headerTextInputPlaceholder}  />
          <Pressable style={styles.button} onPress={() => {setModalVisible(false); onSubmit()}} >
            <Text style={styles.text}>Enviar Pregunta</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default QuestionModal;

