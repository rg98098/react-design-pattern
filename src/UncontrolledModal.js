import React, { useState } from 'react'
import styled from 'styled-components';


const ModalContainer = styled.div`
    position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`
const ModalBody = styled.div`
	background-color: white;
	margin: 10% auto;
	padding: 20px;
	width: 50%;
`

function UncontrolledModal({children}) {
    const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
    <button onClick={()=> setShouldShow(true)}>Show Modal</button>
    { shouldShow && (<ModalContainer onClick={()=> setShouldShow(false)}>
        <ModalBody>
        <button onClick={()=> setShouldShow(false)}>hide Modal</button>
            {children}
        </ModalBody>
    </ModalContainer>)}
    </>
  )
}

export default UncontrolledModal