import React from "react";

const Contacts = () => {
  const contactsData = {
    email: "aliyev.0166@gmail.com ",
  };
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: {contactsData.email}</p>
    </div>
  );
};

export default Contacts;
