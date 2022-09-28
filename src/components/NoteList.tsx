import * as React from 'react';
import { Note } from '../interfaces/Note';
import Notes from './Notes';

interface INoteListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList: React.FunctionComponent<INoteListProps> = ({notes,setNotes}) => {

  const handleDelete = (id: string)=> {
      console.log("Note id to be deleted",id);
      setNotes( notes.filter( note => note.id !== id )
      );
  }

  const renderNotes = (): JSX.Element[] => {

      return notes.map( note =>{
        return <Notes key={note.id} note={note} handleDelete={handleDelete}  />
      });
      
  }
  return <>
      <h2>Note List</h2>
      <div>
        {renderNotes()}
      </div>
  </>;
};

export default NoteList;
