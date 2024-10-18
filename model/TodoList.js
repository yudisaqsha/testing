const fs = require("fs");

class TodoList{
    constructor(id, task,status){
        this.id = id,
        this.task = task,
        this.status = status
    }
    static getTodo(){
        let data = fs.readFileSync("./data.json","utf-8");
        let parsedData = JSON.parse(data);
        let todos = parsedData.map(el => {
            const{id, task, status} = el;
            return new TodoList(id, task, status)
        })
        return todos;
    }
    static view(){
        let todos =this.getTodo();
        return todos;
    }
};

module.exports = TodoList;