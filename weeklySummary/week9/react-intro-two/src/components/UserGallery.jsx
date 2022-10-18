import React from "react";
import PropTypes from "prop-types";

const UserGallery = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <img key={user.id} src={user.avatar} />
      ))}
    </div>
  );
};

UserGallery.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default UserGallery;
