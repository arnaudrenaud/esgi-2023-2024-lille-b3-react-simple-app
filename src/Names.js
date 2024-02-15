import { useState } from "react";

export function Names() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fetchName = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    setFirstName(data.results[0].name.first);
    setLastName(data.results[0].name.last);
  };

  return (
    <div>
      {firstName} {lastName}
      <br />
      <button onClick={fetchName}>Générer nom</button>
    </div>
  );
}
