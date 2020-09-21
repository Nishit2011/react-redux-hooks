import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../actions/index";
import { connect } from "react-redux";

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);
  return users.loading ? (
    <h2>Loading</h2>
  ) : users.error ? (
    <h2>{users.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {users &&
          users.users &&
          users.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
