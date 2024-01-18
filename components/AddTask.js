import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleAddTask = () => {
        const trimmedTitle = title.trim();
        if (trimmedTitle !== '') {
            onAddTask(trimmedTitle);
            setTitle('');
        }
    };

    return (
        <View style={styles.addTodoForm}>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Enter your new todo"
                style={styles.input}
            />
            <Button title="Add Todo" onPress={handleAddTask} />
        </View>
    );
};


const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;