import React from "react";
import "./ContactDetails.css";

const ContactInfo = ({ selectedContact }) => {
  if (!selectedContact)
    return <div>Please select a contact to view details.</div>;

  const detailsList = [
    {
      label: "Name",
      value: `${selectedContact.firstName} ${selectedContact.lastName}`,
    },
    { label: "Date of Birth", value: selectedContact.dob },
    { label: "Street Address", value: selectedContact.address },
    { label: "City", value: selectedContact.city },
    { label: "State", value: selectedContact.state },
    { label: "Postal Code", value: selectedContact.zip },
    { label: "Email", value: selectedContact.email },
    { label: "Phone", value: selectedContact.phone },
  ];

  return (
    <div className="contact-info-container">
      <h3>Contact Information</h3>
      {detailsList
        .filter((item) => item.value && item.value.trim())
        .map((item, idx) => (
          <p key={idx}>
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
    </div>
  );
};

export default ContactInfo;
