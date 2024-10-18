const command = process.argv[2];
const params = process.argv.slice(3);

const TodoController = require("./controller/TodoListController");


switch(command){
    case "view":
        // const fs = require("fs");
        // let data = fs.readFileSync("./data.json","utf-8");
        // let todos = JSON.parse(data)
        TodoController.view()
        break;
    case "create":
        console.log("Created");
        break;
    case "update":
        console.log("Updated");
        break;   
    case "delete":
        console.log("Deleted");
        break;
    default :
        TodoController.showmsg("Wrong Command");
        break
}