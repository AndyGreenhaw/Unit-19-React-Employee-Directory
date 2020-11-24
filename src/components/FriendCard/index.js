import React from "react";
import "./style.css";
// import friends from "../../friends.json";

function FriendCard(props) {


  return (
    <>

      <tbody>
          <tr className="tableCell">
            <th className="tableCell">{props.name}</th>
            <th className="tableCell">{props.occupation}</th>
            <th className="tableCell">{props.location}</th>
            <th className="remove tableCell" onClick={ () => props.filterArray(props.id)}>𝘅</th>
          </tr>
      </tbody>
      
     
    </>
  );
}

export default FriendCard;
