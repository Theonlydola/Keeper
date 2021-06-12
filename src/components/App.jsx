import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, setNotes] = React.useState([]);

  function addNote(Note) {
    setNotes((prevItems) => {
      return [...prevItems, Note];
    });
  }

  function deleteNote(id) {
    setNotes(
      Notes.filter((note, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {Notes.map((note, index) => (
        <Note
          deleteItem={deleteNote}
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}
      {/* <Note key={1}  /> */}
      <Footer />
    </div>
  );
}

export default App;
