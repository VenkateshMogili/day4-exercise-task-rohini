import { Button } from 'react-bootstrap';

function AddButton(props) {

    return (
     
        <Button onClick={props.addTask} variant="primary">Add Task</Button>
      
    )
  }
  
  export default AddButton;