import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
  state = {
    id: "",
    title: "",
  };

  handleTitleToDo = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  clickButonAdd = () => {
    if (!this.state.title) {
      toast.error("Khong duoc de trong");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 110),
      title: this.state.title,
    };
    this.props.addToDo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => {
            this.handleTitleToDo(event);
          }}
        />
        <button
          type="button"
          onClick={() => {
            this.clickButonAdd();
          }}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default AddToDo;
