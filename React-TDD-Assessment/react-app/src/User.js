import React from "react";

class User extends React.Component {
  render() {
    let id = this.props.userId;
    let name = this.props.name;
    let url = `http://localhost:3000/todolist/${id}/${name}`;

    return (
      <div className="card">
        <div className="card-body">
          <a href={url}>{name}</a>
        </div>
      </div>
    );
  }
}

export default User;
