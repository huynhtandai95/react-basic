import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: true,
  };

  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleClickDelete = (job) =>{
    this.props.delete1Job(job)
  }
  render() {
    let { firstName, lastName, arrJobs } = this.props.dataCha;
    let showJobStatus = this.state.showJob;
    return (
      <>
        {showJobStatus === true && 
          <>
            <div>
              <button onClick={() => {this.handleShowHide()}}>
                Hide
              </button>
            </div>
            <div className="jobList">
              ChildComponent:
              {arrJobs.map((item, index) => {
                if (item.salary > 50) {
                  return  <div 
                  key={item.id}> {item.job} - {item.salary} <></> <span key={item.id} onClick={()=>this.handleClickDelete(item)} >x</span>
                  </div>  ;
                }
              })}
            </div>
          </>
        }

        {showJobStatus === false && 
          <div>
            <button onClick={() => { this.handleShowHide() }} >
              Show
            </button>
          </div>
        }
      </>
    );
  }
}
export default ChildComponent;
