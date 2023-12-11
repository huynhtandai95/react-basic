import React from "react";
import axios from "axios";

class ListUsers extends React.Component {
  state = {
    listUsers: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  {item.email}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListUsers;
