import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../actions/index";
import { connect } from "react-redux";

const UsersHooks = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    console.log(users);
  }, []);
  return users.loading ? (
    <h2>Loading</h2>
  ) : users.error ? (
    <h2>{users.error}</h2>
  ) : (
    <div>
      <h2>Users List- via Hooks</h2>
      <div>
        {users &&
          users.users &&
          users.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
};

export default UsersHooks;
