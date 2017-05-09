import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles.android'
const URL_FETCH= "http://192.168.1.17:3000/todos";

export class Todo extends Component {

    constructor(){
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    componentDidMount(){
        fetch(URL_FETCH)
        .then(res => res.json())
        .then(todos => this.setState({todos}))
        .catch(error => console.warn(error))

    }


    handleChange(text){
        this.setState({newTodo: text})
    }
    handlePress(){
        if(this.state.newTodo){

            fetch(URL_FETCH,{
                method: 'post',
                body: JSON.stringify({
                    name: this.state.newTodo
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(todo => {
                const todos = [todo,...this.state.todos]
                this.setState({todos, newTodo: ''})
            })
            .catch(error => console.warn(error.message))
        }

    }
    render() {
        return (
            <View>
                <View style = {styles.form}>
                    <TextInput 
                    style = {styles.input}
                    value={this.state.newTodo} 
                    onChangeText= {this.handleChange.bind(this)}/>
                    <TouchableOpacity 
                    style = {styles.button}
                    onPress = {this.handlePress.bind(this)}>
                        <Text
                        style = {styles.buttonText}
                        >
                            Create
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                style = {styles.todos}
                >
                    {this.state.todos.map((todo,i) => 
                    <View style = {styles.todo} key={i}>
                         <Text style = {styles.todoText} > {todo.name} </Text>
                    </View>
                    
                    )}
                </View>
            </View>
        );
    }
}


