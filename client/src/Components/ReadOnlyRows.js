import React from "react";

const ReadOnlyRows = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, contact)}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRows;
