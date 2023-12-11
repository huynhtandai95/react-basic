import React from "react";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "thuc day" },
      { id: "todo2", title: "tap the duc" },
    ],
    editToDo: {},
  };

  addToDo = (todo) => {
    console.log(todo);
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("ADD success");
  };
  deleteToDo = (itemClickDelete) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== itemClickDelete.id);

    this.setState({
      listTodos: currentTodo,
    });
    toast.success("delete success");
  };

  handleEditToDo = (itemClickEdit) => {
    let { editToDo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    //Save
    if (isEmptyObj === false && editToDo.id == itemClickEdit.id) {
      //  copy listTodos ra mảng mới để chế biến - chứ không chế biến mảng cho sẵn
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex(
        (item) => item.id === itemClickEdit.id
      );
      listTodosCopy[objIndex].title = editToDo.title;

      this.setState({
        listTodos: listTodosCopy,
        // set editToDo Rỗng đê cho isEmptyObj=== true --- Nếu isEmptyObj=== true (Rỗng) thì hiện nút Edut
        editToDo: {},
      });

      toast.success("Update success");
      return;
    }
    //edit
    this.setState({
      editToDo: itemClickEdit,
    });
  };
  handleOnchangeEdit = (event) => {
    let editToDoCopy = this.state.editToDo;
    editToDoCopy.title = event.target.value;
    this.setState({
      editToDo: editToDoCopy,
    });
  };

  render() {
    let { listTodos, editToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    return (
      <>
        <p>SIMPLE TODO APP</p>
        <div className="list-todo-container">
          <AddToDo addToDo={this.addToDo} />
          <div className="list-todo-content">
            {listTodos.map((item, index) => {
              return (
                <div className="todo" key={index}>
                  {isEmptyObj === true ? (
                    <span>
                      {item.id} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editToDo.id === item.id ? (
                        <input
                          type="text"
                          value={item.title}
                          onChange={(event) => this.handleOnchangeEdit(event)}
                        />
                      ) : (
                        <span>
                          {item.id} - {item.title}
                        </span>
                      )}
                    </>
                  )}

                  <button onClick={() => this.handleEditToDo(item)}>
                    {/* Nếu sau khi click Edit - (isEmptyObj = false => Obj có value) ,isEmptyObj = true => Obj Rỗng)*/}
                    {isEmptyObj === false && editToDo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button onClick={() => this.deleteToDo(item)}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ListToDo;
