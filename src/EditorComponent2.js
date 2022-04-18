import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditorComponent2() {
  const imageHandler = () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (input.files) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("image", file);
        const fileName = file.name;
        console.log(formData, "formData");
      }
    };
  };
  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        image: imageHandler,
      },
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "image",
  ];
  const CustomToolbar = () => (
    <div id="toolbar">
      <select className="ql-header">
        <option value="1"></option>
        <option value="2"></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <select className="ql-color">
        <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="orange"></option>
        <option value="violet"></option>
        <option value="#d0d1d2"></option>
        <option selected></option>
      </select>
      <select className="ql-background"></select>
      <button className="ql-link"></button>
      <button className="ql-image"></button>
    </div>
  );

  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e);
  };
  useEffect(() => {
    console.log(text, "text");
  }, [text]);
  return (
    <div>
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          modules={modules}
          formats={formats}
          value={text}
          onChange={handleText}
        />
      </div>
    </div>
  );
}
export default EditorComponent2;
