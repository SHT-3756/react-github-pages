import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Editor from "./EditorComponent";
import Editor2 from "./EditorComponent2";
import JoDit from "./JoDit";
import TestEditorForm from "./TestEditorForm";

function App() {
  const [desc, setDesc] = useState("");

  const onEditorChange = (value) => {
    setDesc(value);
  };

  return (
    <div className="App">
      {/* <Editor value={desc} onChange={onEditorChange} /> */}
      {/* <JoDit /> */}
      <TestEditorForm />
    </div>
  );
}

export default App;
