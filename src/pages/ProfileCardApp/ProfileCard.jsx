import React from "react";

const ProfileCard = (props) => {
  return (
    <div key={props.id}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Hobby: {props.hobby}</p>
      <button onClick={props.hiFunction}>Alert</button>
      <button onClick={props.deleteMe}>Delete User</button>
    </div>
  );
};

export default ProfileCard;
