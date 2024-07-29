import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledForm } from "./UncontrolledForm";
import ControlledModal from "./ControlledModal";



function App() {

  const [shouldShowModal,setShouldShowModal ] = useState(false)

	return (
    <>
    <ControlledModal shouldShow={shouldShowModal} onRequestClose={()=> { setShouldShowModal(false)}}>
      <h1>Hello!! I am Rahul</h1>
    </ControlledModal>
    <button onClick={()=> setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal? 'hide Modal': 'show modal'}
    </button>
    {/* <UncontrolledForm/> */}
    {/* <ControlledForm/> */}
    </>
	);
}

export default App;
