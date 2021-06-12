import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function composeNote(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd(note);
          setNote({
            title: "",
            content: ""
          });
          event.preventDefault();
        }}
      >
        <input
          onChange={composeNote}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={composeNote}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
