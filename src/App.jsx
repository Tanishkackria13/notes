import {React,useState} from "react";
import {Footer} from "./footer/Footer"
import { Header } from "./header/Header";
import CreateArea from "./Create_area/CreateArea";
import Note from "./Note/Note";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
      setNotes(prevNotes => {
          return [...prevNotes, newNote];
      });
  }

  function deleteNote(id) {
      setNotes(prevNotes => {
          return (
              prevNotes.filter((noteItem, index) => {
                  return index !== id;
              })
          )
      });
  }

  return (
      <div>
          <Header />
          <CreateArea
              onAdd={addNote}
          />
          {notes.map((noteItem, index) => {
              return (
                  <Note 
                      key={index}
                      id={index}
                      title={noteItem.title}
                      content={noteItem.content}
                      onDelete={deleteNote}
                  />
              );
          })}
          <Footer />
      </div>
  )
}

export default App;