import React, {useState, useEffect} from 'react'

import 'react-drop-zone/dist/styles.css'
import {
    Button, Modal, Spinner,
    ModalHeader, ModalBody,
    Row,
    Col,
  } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, Table} from "reactstrap";


function TheftDetection() {
  
    // Test video loaded toggle 
   const [selectTestVideo, setTestVideo] = useState(false)

    // Modal open state
    const [modal, setModal] = useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);

    // Loading?
    const [loading, setLoading] = useState(false)
  
    // Accident identified ?
    const [found, setFound] = useState(false)

    // Accidet footage state
    const [accidentFootage, setAccidentFootage] = useState(null)


     // Accident found frame
   const [foundFrame, setFoundFrame] = useState(null)

   const getFrameDataFromVideo = (id) => {
    
     setTimeout(() => {
         setLoading(false)
         setFound(true)
         setFoundFrame("10")
     }, 3000)
   
 }

   return (
    <div>
        
            <div className="center">
              <h2>

                This feature is under development
              </h2>
            </div>
    </div>
  )
}

export default TheftDetection