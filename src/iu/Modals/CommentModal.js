import React from 'react';
import { View, Text, Modal, ScrollView , TextInput,Pressable} from 'react-native';
import styles from '../../styles/styles';
import { getCommentsByProductId } from '../../controller/CommentController';
import { getPersonById } from '../../controller/PersonController';




const CommentModal = ({ modalVisible, setModalVisible, onSubmit, productId }) => {
  const comments = getCommentsByProductId(productId);

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
          <Text style={styles.text}>Comentarios</Text>
          <ScrollView>
            {comments.length > 0 ? (
              comments.map(comment => {
                const person = getPersonById(comment.personId);
                return (
                  <View key={comment.id} style={styles.commentContainer}>
                    <Text style={styles.text}>{person.name} ({comment.commentDate})</Text>
                    <Text style={styles.commentText}>{comment.comment}</Text>
                    <Text style={styles.commentScore}>Puntuación: {comment.score}/5</Text>
                  </View>
                );
              })
            ) : (
              <Text style={styles.textSmall}>No hay comentarios disponibles.</Text>
            )}
          </ScrollView>
          <TextInput style={styles.input} placeholder="Escribe tu comentario..." placeholderTextColor={styles.headerTextInputPlaceholder}  />
          <TextInput style={styles.input} placeholder="Calificación (1-5)" keyboardType="numeric" placeholderTextColor={styles.headerTextInputPlaceholder}/>
          <Pressable style={styles.button} onPress={() => {setModalVisible(false); onSubmit()}} >
            <Text style={styles.text}>Enviar Comentario</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CommentModal;

