import { useState } from "react";

export default function InputButton() {
  const [people, setPeople] = useState<string[]>([]);
  const [personName, setPersonName] = useState<string>("")

  const handleChange = (personName: string) => {
    if (personName) {
      setPeople([...people, personName])
      setPersonName("")
    }
  }


  return (
    <div>
      <input value={personName} onChange={(event) => setPersonName(event.target.value)} />
      <button onClick={() => handleChange(personName)}>Add</button>
      {people.map(name => {
        return (
          <p>{name}</p>
        )
      })}
    </div>
  );
}
