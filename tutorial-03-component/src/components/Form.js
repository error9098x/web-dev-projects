import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Submitting Name ${name}, Email ${email}`);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)}  required/>
        </label>
        <br/>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
      <h2>Displaying useState Data:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default MyForm;