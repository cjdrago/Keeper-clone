import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@material-ui/core';
import Fab from '@mui/material/Fab';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function CreateArea(props) {

  const [zoomBoolean, setZoomBoolean] = useState(false);
  const [clcikedAway, setClcikedAway] = useState(true);



  const [note, setNote] = useState({
    title : "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
  }

  function handleFormClick() { 
    setZoomBoolean(true);
    setClcikedAway(false);
  };

  function handleClickAway() {
    setZoomBoolean(false);
    setClcikedAway(true);

    console.log(`zoomBoolean:${zoomBoolean} clcikedAway:${clcikedAway}`)

  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <form className="create-note">
        
          {zoomBoolean ? <input name="title" onChange={handleChange} value = {note.title} placeholder="Title" /> : null}
          
          
            <textarea 
              name="content" 
              onChange={handleChange} 
              value = {note.content} 
              placeholder="Take a note..." 
              rows={zoomBoolean ? 3 : 1}
              onClick={handleFormClick}
            />

          <Zoom in={zoomBoolean}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    </ClickAwayListener>

  );
}

export default CreateArea;
