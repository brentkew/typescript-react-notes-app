import * as React from 'react';
import { Note } from '../interfaces/Note';
import {Card, Button} from 'react-bootstrap'

interface INotesProps {
  note: Note,
  handleDelete: (id: string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({note,handleDelete}) => {
  
  return <>
      <Card style={{ width: '25rem', display: 'inline-block', backgroundColor: note.color, marginLeft: '10px' }} className="">      
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>
          {note.content}
        </Card.Text>
        <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
        <Button variant="danger" className="mt-2" onClick={ ()=>{ handleDelete(note.id) }}>Delete</Button>
      </Card.Body>
    </Card>
  </>;
};

export default Notes;
