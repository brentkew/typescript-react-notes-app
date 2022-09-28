import * as React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Note } from "../interfaces/Note";
import {v4 as uuidv4} from 'uuid';

interface ICreateNoteProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({notes, setNotes}) => {
  
  const [error,setError] = React.useState<string>("");
  
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const contentRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (titleRef.current?.value == "" || contentRef.current?.value == "")
      return setError("All fields are mandatory");


    setError('');
    setNotes([
      ...notes, {
        id: uuidv4(),
        title: (titleRef.current as HTMLInputElement).value,
        content: (contentRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toLocaleString()
      }
    ]);
    
    (titleRef.current as HTMLInputElement).value = '';
    (contentRef.current as HTMLTextAreaElement).value = '';

  };

  return (
    <>
      <h2>Create New Note</h2>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicTitle">
          
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Note Title"
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContent">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Note Description"
            ref={contentRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicColor">
          <Form.Label>Note Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Enter Note Color"
            ref={colorRef}
          />
        </Form.Group>


        {error && <Alert variant="danger">{error}</Alert>}
        

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
      <hr />
    </>
  );
};

export default CreateNote;
