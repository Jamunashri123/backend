console.log("Server index.js file is running");

const express = require("express");
const cors = require("cors");

// const { React } = require("react");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());


// GET - get all the todo
// const [todo, setTodo] = React.useState( ["Learn React", "Build a Todo App", "Profit!"])
app.get("/todos", (req, res) => {
  res.json(["Learn React", "Build a Todo App", "Profit!"]);
});

let todoSample = [
  {
    name: "Learn React",
    id: 1,
  },
  {
    name: "Learn React 2",
    id: 2,
  },
  {
    name: "Learn React 3",
    id: 3,
  },
  {
    name: "Learn React 4",
    id: 4,
  },
];

// GET - get the particular details based on the ID provided

app.get("/todos/:id", (req, res) => {
  const value = req.params.id;
  console.log(
    todoSample.find((i) => i.id == value),
    "value",
  );
  let data = todoSample.find((i) => i.id == value);
  console.log(data, todoSample);
  setTimeout(() => {
   res.json(data);  
  }, 2000);
 
});

app.post("/add-todo", (req, res) => {
  const {body} = req.body;
  console.log(body, "todo",req.body)
  todo.push(body);
  setTodo(todo)
  res.status(200).json(todo);
});

app.delete('/delete-todo/:id', (req,res) => {
  const {id} = req.params
  let remainingVal = todo.filter(i => i != id)
  setTodo(remainingVal)
  setTimeout(() => {
    console.log(remainingVal,"remainivVAlue")
  res.json(remainingVal)
  },3000)
  
})

app.put('/update/:id',(req,res) => {
  const {id } = req.params
  let {body} = req.body

  let updateVal = todo.find(i => i == id)
updateVal  = body;
todo.filter(i => i !== id)
todo.push(updateVal)
res.json(todo)
})
app.listen(PORT, () => {
  console.log(`Server is listening on this http://localhost:${PORT}/ `);
});
