import React, { useState } from 'react';
import { View, Text, Modal, ScrollView, TextInput, Pressable } from 'react-native';
import styles from '../../styles/styles';
import personData from '../../data/PersonData'; 
import { useComment } from '../../Context/CommentProvider';

const CommentModal = ({ modalVisible, setModalVisible, productId }) => {
  const { comments, addComment } = useComment();
  const [newComment, setNewComment] = useState('');
  const [score, setScore] = useState(5);

  const getPersonById = (personId) => personData.find(person => person.id === personId);

  const handleSubmit = () => {
    if (newComment.trim()) {
      addComment(productId, newComment, score);
      setNewComment('');
      setScore(5);
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
          <Text style={styles.modalTitlemfp}>Comentarios</Text>
          <ScrollView>
            {comments.length > 0 ? (
              comments.map(comment => {
                const person = getPersonById(comment.personId); 
                return (
                  <View key={comment.id} style={styles.commentContainer}>
                    <Text style={styles.text}>{person?.name} ({comment.commentDate})</Text>
                    <Text style={styles.commentText}>{comment.comment}</Text>
                    <Text style={styles.commentScore}>Puntuación: {comment.score}/5</Text>
                  </View>
                );
              })
            ) : (
              <Text style={styles.textSmall}>No hay comentarios disponibles.</Text>
            )}
          </ScrollView>
          <TextInput 
            style={styles.input} 
            placeholder="Escribe tu comentario..." 
            value={newComment}
            onChangeText={setNewComment}
            placeholderTextColor={styles.headerTextInputPlaceholder}  
          />
          <TextInput 
            style={styles.input} 
            placeholder="Calificación (1-5)" 
            value={score.toString()}
            onChangeText={(text) => setScore(Math.min(Math.max(parseInt(text) || 1, 1), 5))}
            keyboardType="numeric" 
            placeholderTextColor={styles.headerTextInputPlaceholder}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Enviar Comentario</Text>
          </Pressable>
          <Pressable style={styles.modalCloseButtonmfp} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalCloseButtonTextmfp}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );

};

export default CommentModal;
