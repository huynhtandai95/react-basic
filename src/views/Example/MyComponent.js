import React from "react";
import ChildComponent from "./ChildComponent";
import FormComponent from "./FormComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: 1, job: "IT", salary: 500 },
      { id: 2, job: "Bac Si", salary: 400 },
    ],
  };

  addNewjob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  delete1Job = (job) => {
    let currenJob = this.state.arrJobs;
    currenJob = currenJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currenJob,
    });
  };
  render() {
    return (
      <>
        <FormComponent addNewjob={this.addNewjob} />
        <ChildComponent 
        dataCha={this.state} 
        delete1Job={this.delete1Job} />
      </>
    );
  }
}

export default MyComponent;
