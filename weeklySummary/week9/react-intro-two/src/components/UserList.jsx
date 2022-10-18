import React from "react";
import SingleUserCard from "./SingleUserCard";
import PropTypes from "prop-types";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <SingleUserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default UserList;
