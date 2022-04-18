import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Editor from "./EditorComponent";
import Editor2 from "./EditorComponent2";
function App() {
  const [desc, setDesc] = useState("");

  const onEditorChange = (value) => {
    setDesc(value);
  };

  return (
    <div className="App">
      <Editor value={desc} onChange={onEditorChange} />
    </div>
  );
}

export default App;
