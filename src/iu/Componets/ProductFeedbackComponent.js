import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/styles';

const ProductFeedbackComponent = ({ recentComments, recentQuestions, setModalCommentVisible, setModalQuestionVisible }) => {
  return (
    <View>
      <View style={styles.sectionPdS}>
        <Text style={styles.sectionTitlePdS}>Comentarios Recientes</Text>
        {recentComments.length > 0 ? (
          recentComments.map((comment, index) => (
            <View key={index} style={styles.commentContainerPdS}>
              <Text style={styles.textPdS}>({comment.commentDate}):</Text>
              <Text style={styles.commentTextPdS}>{comment.comment} - Puntuación: {comment.score}/5</Text>
            </View>
          ))
        ) : (
          <Text style={styles.textPdS}>No hay comentarios disponibles</Text>
        )}
        <Pressable style={styles.buttonPdS} onPress={() => setModalCommentVisible(true)}>
          <Text style={styles.buttonTextPdS}>Ver más comentarios</Text>
        </Pressable>
      </View>

      <View style={styles.sectionPdS}>
        <Text style={styles.sectionTitlePdS}>Preguntas Recientes</Text>
        {recentQuestions.length > 0 ? (
          recentQuestions.map((question, index) => (
            <View key={index} style={styles.commentContainerPdS}>
              <Text style={styles.textPdS}>({question.questionDate}):</Text>
              <Text style={styles.commentTextPdS}>{question.question}</Text>
              {question.answer && (
                <Text style={styles.commentScorePdS}>
                  Respuesta del vendedor ({question.answerDate}): {question.answer}
                </Text>
              )}
            </View>
          ))
        ) : (
          <Text style={styles.textPdS}>No hay preguntas disponibles</Text>
        )}
        <Pressable style={styles.buttonPdS} onPress={() => setModalQuestionVisible(true)}>
          <Text style={styles.buttonTextPdS}>Ver más preguntas</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductFeedbackComponent;
