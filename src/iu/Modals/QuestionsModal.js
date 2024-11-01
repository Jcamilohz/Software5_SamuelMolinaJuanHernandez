import React, { useState } from 'react';
import { View, Text, Modal, ScrollView, TextInput, Pressable, Image } from 'react-native';
import styles from '../../styles/styles';
import { useQuestion } from '../../Context/QuestionProvider';
import { useUser } from '../../Context/UserContext';

const QuestionModal = ({ modalVisible, setModalVisible, productId, onSubmit }) => {
  const { questions, addQuestion } = useQuestion();
  const { users } = useUser();
  const [newQuestion, setNewQuestion] = useState('');

  const getUserById = (userId) => users.find(user => user.id === userId);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleSubmit = () => {
    if (!onSubmit(newQuestion)) {
      return; 
    }

    if (newQuestion.trim()) {
      addQuestion(productId, newQuestion);
      setNewQuestion('');
      setModalVisible(false);
    }
  };

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
              questions.map((question) => {
                const userInfo = getUserById(question.personId);
                const formattedDate = formatDate(question.questionDate);
                return (
                  <View key={question.id} style={styles.commentContainer}>
                    <View style={styles.commentHeader}>
                      <Image
                        source={{ uri: userInfo?.imageProfile }}
                        style={styles.profileImage}
                      />
                      <Text style={styles.text}>
                        {userInfo?.userName } ({formattedDate})
                      </Text>
                    </View>
                    <Text style={styles.commentText}>{question.question}</Text>
                    {question.answer && (
                      <Text style={styles.commentScore}>
                        ({formatDate(question.answerDate)}) Respuesta del vendedor: {question.answer}
                      </Text>
                    )}
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
            value={newQuestion}
            onChangeText={setNewQuestion}
            placeholderTextColor={styles.headerTextInputPlaceholder}  
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
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
