import React, { useState } from 'react';
import { View, Text, Modal, ScrollView, TextInput, Pressable, Image } from 'react-native';
import styles from '../../styles/styles';
import { useComment } from '../../Context/CommentProvider';
import { useUser } from '../../Context/UserContext';

const CommentModal = ({ modalVisible, setModalVisible, productId, onBeforeComment }) => {
  const { comments, addComment } = useComment();
  const { users } = useUser();
  const [newComment, setNewComment] = useState('');
  const [score, setScore] = useState('5');

  const getUserById = (userId) => users.find(user => user.id === userId);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleScoreChange = (text) => {
    if (/^\d*$/.test(text)) {
      const number = parseInt(text, 10);
      if (number >= 1 && number <= 5) {
        setScore(text);
      } else if (text === '') {
        setScore('');
      }
    }
  };

  const handleSubmit = () => {
    if (newComment.trim() && score) {
      const numericScore = parseInt(score, 10);
      if (onBeforeComment(newComment, numericScore)) {
        addComment(productId, newComment, numericScore);
        setNewComment('');
        setScore('5');
        setModalVisible(false);
      }
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
                const userInfo = getUserById(comment.personId); 
                const formattedDate = formatDate(comment.commentDate);
                return (
                  <View key={comment.id} style={styles.commentContainer}>

                    <View style={styles.commentHeader}>
                      <Image
                        source={{ uri: userInfo.imageProfile }}
                        style={styles.profileImage}
                      />
                      <Text style={styles.text}>{userInfo?.userName} ({formattedDate})</Text>
                  </View>
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
            keyboardType="numeric"
            value={score}
            onChangeText={handleScoreChange}
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
