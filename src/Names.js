import { useState } from "react";

export function Names() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchName = async () => {
    setIsLoading(true);

    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    setIsLoading(false);
    setFirstName(data.results[0].name.first);
    setLastName(data.results[0].name.last);
  };

  return (
    <div>
      {firstName} {lastName}
      <br />
      {isLoading ? (
        <button disabled>Chargement…</button>
      ) : (
        <button onClick={fetchName}>Générer nom</button>
      )}
    </div>
  );
}
