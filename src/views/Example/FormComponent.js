import React from "react";

class FormComponent extends React.Component {
  state = {
    job: "",
    salary: "",
  };

  handleChangeJob = (event) => {
    this.setState({
      job: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = () => {
    if (!this.state.job || !this.state.salary) {
      alert("Missing input");
      return;
    }
    this.props.addNewjob({
      id: Math.floor(Math.random() * 110),
      job: this.state.job,
      salary: this.state.salary,
    });

    this.setState({
      job: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">Jobs</label>
        <br />
        <input
          type="text"
          value={this.state.job}
          onChange={(event) => this.handleChangeJob(event)}
        />
        <br />
        <label htmlFor="lname">Salary</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <br />
        <input
          type="button"
          onClick={() => {
            this.handleSubmit();
          }}
          value="Submit"
        />
      </form>
    );
  }
}

export default FormComponent;
