import React from "react";
import Card from "./Card";
import contacts from "./contacts";

function createCard(contact) {
  return (
    <>
      <Card
        name={contact.name}
        img={contact.img}
        tel={contact.tel}
        email={contact.email}
      />
    </>
  );
}

function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </>
  );
}

export default App;
