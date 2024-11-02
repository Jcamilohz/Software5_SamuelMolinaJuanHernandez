import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles/styles';
import { useUser } from '../../Context/UserContext';

const ProductFeedbackComponent = ({ recentComments, recentQuestions, setModalCommentVisible, setModalQuestionVisible }) => {
  const { users } = useUser();

  const getUserById = (userId) => users.find(user => user.id === userId);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <View>
      <View style={styles.padding}>
        <Text style={styles.sectionTitlePdS}>Comentarios Recientes</Text>
        {recentComments.length > 0 ? (
          recentComments.map((comment, index) => {
            const userInfo = getUserById(comment.personId);
            const formattedDate = formatDate(comment.commentDate);

            return (
              <View key={index} style={styles.commentContainerPdS}>
                <View style={styles.commentHeader}>
                  <Image
                    source={{ uri: userInfo?.imageProfile }}
                    style={styles.profileImage}
                  />
                  <Text style={styles.textPdS}>
                    {userInfo?.userName} ({formattedDate})
                  </Text>
                </View>
                <Text style={styles.commentTextPdS}>{comment.comment}</Text>
                <Text style={styles.commentScorePdS}>Puntuación: {comment.score}/5</Text>
              </View>
            );
          })
        ) : (
          <Text style={styles.textPdS}>No hay comentarios disponibles</Text>
        )}
        <Pressable style={styles.buttonPdS} onPress={() => setModalCommentVisible(true)}>
          <Text style={styles.buttonTextPdS}>Ver más comentarios</Text>
        </Pressable>
      </View>

      <View style={styles.padding}>
        <Text style={styles.sectionTitlePdS}>Preguntas Recientes</Text>
        {recentQuestions.length > 0 ? (
          recentQuestions.map((question, index) => {
            const userInfo = getUserById(question.personId);
            const formattedDate = formatDate(question.questionDate);
            return (
              <View key={index} style={styles.commentContainerPdS}>
                <View style={styles.commentHeader}>
                  <Image
                    source={{ uri: userInfo?.imageProfile }}
                    style={styles.profileImage}
                  />
                  <Text style={styles.textPdS}>
                    {userInfo?.userName} ({formattedDate})
                  </Text>
                </View>
                <Text style={styles.commentTextPdS}>{question.question}</Text>
                {question.answer && (
                  <Text style={styles.commentScorePdS}>
                    Respuesta del vendedor ({formatDate(question.answerDate)}): {question.answer}
                  </Text>
                )}
              </View>
            );
          })
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
