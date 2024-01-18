import 'react-native-get-random-values'
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
    const [toDos, setTodos] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value }))); 

    const addToDo = newTitle => {
        setTodos(prevTodos => [...prevTodos, { id: uuidv4(), title: newTitle }]);
    };
    const removeToDo = id => {
        setTodos(prevTodos => prevTodos.filter(toDo => toDo.id !== id));
    };

    return (
        <View style={styles.todoListContainer}> 
            {toDos.map(toDo => (
                <View key={toDo.id} style={styles.todoItem}> 
                    <Text style={styles.text}>{toDo.title}</Text>
                    <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

ToDoList.defaultProps = {
    initialValues: [],
};


const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});


export default ToDoList;
  