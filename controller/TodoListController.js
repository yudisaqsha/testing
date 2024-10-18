const TodolistView = require("../view/TodoListView");
const TodoList = require('../model/TodoList');

class TodoListController{
    static view(){
        let todos = TodoList.view()
        TodolistView.showdata(todos);

    }
    static showmsg(msg){
        TodolistView.showmsg(msg);
    }
}


module.exports = TodoListController;