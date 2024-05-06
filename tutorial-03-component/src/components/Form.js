import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Submitting Name ${name}, Email ${email}`);
  }

  return(
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
  )
}

export default MyForm;