import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Note } from "./interfaces/Note";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";

function App() {

  

  const [notes, setNotes] = useState<Note[]>([
    {
      id: uuidv4(),
      title: "Meeting",
      content: "This is my first meeting with UI / UIX",
      color: "#dfdfdf",
      date: new Date().toLocaleString(),
    },
    {
      id: uuidv4(),
      title: "SEO Testing",
      content: "SEO Roadmap",
      color: "#f4fffb",
      date: new Date().toLocaleString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            
            <CreateNote notes={notes} setNotes={setNotes} />
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
