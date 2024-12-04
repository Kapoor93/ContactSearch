import React from "react";
import "./ContactTable.css";

const ContactsGrid = ({ data, onSelect }) => {
  return (
    <table className="contacts-grid">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>DOB</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((contact, idx) => (
          <tr key={idx} onClick={() => onSelect(contact)}>
            <td>{`${contact.firstName} ${contact.lastName}`}</td>
            <td>{contact.dob}</td>
            <td>{contact.address}</td>
            <td>{contact.city}</td>
            <td>{contact.state}</td>
            <td>{contact.zip}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsGrid;
