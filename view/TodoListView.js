// const fs = require("fs");
class TodoListView{

    static showdata(todos){
        // let data = fs.readFileSync("./data.json","utf-8");
        // let todos = JSON.parse(data);
        // console.log(todos);
        console.log(todos);
    }
    static showmsg(msg){
        console.log(msg);
    }
};

module.exports = TodoListView;