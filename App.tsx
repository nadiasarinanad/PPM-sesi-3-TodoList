import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

const TodoList = () => {
  const [title, setTitle] = useState<string>('');
  const [todo, setTodo] = useState<any[]>([
    {
      id: 1,
      title: 'Learn React Native',
      completed: false,
    },
  ]);

  const hanleAddTodo = () => {
    if (!title) {
       Alert.alert('Error', 'Please enter your todo');
  }
    const newTodo = {
      id: todo.length + 1,
      title: title,
      completed: false,
    };
    setTodo([...todo, newTodo]);
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your todo"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <Pressable style={styles.button} onPress={hanleAddTodo}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </Pressable>
      </View>
      {todo.map((item) => (
        <Text key={item.id} style={styles.todoItem}>
          {item.title}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  buttonText: {
    color: 'white',
  },
  todoItem: {
    fontSize: 18,
    color: 'black',
  },
});

export default TodoList;
