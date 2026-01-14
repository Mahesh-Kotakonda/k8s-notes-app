import React, { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

function App() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/notes`)
      .then((res) => res.json())
      .then(setNotes);
  }, []);

  const submitNote = async () => {
    await fetch(`${API_URL}/api/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    setContent("");
    const res = await fetch(`${API_URL}/api/notes`);
    setNotes(await res.json());
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Team Notes</h1>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a note"
      />
      <button onClick={submitNote}>Add</button>

      <ul>
        {notes.map((n) => (
          <li key={n.id}>{n.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
