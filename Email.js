import React, { useState } from "react";

function Email() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const VerifierEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[a-zA-Z]+\@[a-zA-Z]{4,6}\.(com|ma|fr)$/;
    setEmailValid(regex.test(e.target.value));
  };

  const VerifierPassword = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.value.length >= 8);
  };

  const handleSubmit = (f) => {
    f.preventDefault();
    
  };

  return (
    <div className="center text-center">
      <form style={{ backgroundColor: "#ADD8E6", padding: "20px", borderRadius: "10px" }} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Connexion</h2>
        <div>
        <label>Email :</label>
        </div>
        <input type="text" name="email" value={email} onChange={VerifierEmail} />
        <br />
        <div>
        <label>Mot de passe :</label>
        </div>
        <input type="password" name="password" value={password} onChange={VerifierPassword} />
        <br />
        <input type="submit" value="Envoyer" /><br />
        <span style={{ color: emailValid ? "green" : "red" }}>{emailValid ? "valide" : "invalide"} email</span>
        <br />
        <span style={{ color: passwordValid ? "green" : "red" }}>{passwordValid ? "valide" : "invalide"} mot de passe</span>
      </form>
    </div>
  );
}

export default Email;