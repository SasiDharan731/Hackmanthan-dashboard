import React, {useState} from 'react'
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'
import {
    Button, Modal, Spinner,
    ModalHeader, ModalBody,
    Row,
    Col,
  } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, Table} from "reactstrap";


function PublicViolence() {
  
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
        <div className="mt-5" id="Main">
            <div className="mb-5">
                <h2>
                    <b>Upload the footage here</b>
                </h2>
            </div>
            <StyledDropZone onDrop={(file, text) => console.log(file, text)}/>
          
            <div className="mt-5">
                <h2 className='text-danger'>Ready made footages (For test mode only)</h2>
                <div className="">
                    <video className='mt-5 video' src="https://hackmanthan.s3.ap-south-1.amazonaws.com/publicViolence/Son+knocks+guy+out+for+harassing+his+mother.mp4" controls>
                        Your browser does not support the video tag.
                    </video><br />
                    {
                        !selectTestVideo ?
                        <Button color='primary' href="#Main" onClick={() => {setTestVideo(!selectTestVideo); toggle(); getFrameDataFromVideo(); setAccidentFootage("https://hackmanthan.s3.ap-south-1.amazonaws.com/AccidentFootages/acident.mp4"); setLoading(true)}}>Test this video</Button>
                        :
                        <Button color='danger' href="#Table"  onClick={() => setTestVideo(!selectTestVideo)}>Remove</Button>
                    }
                </div>
            </div>
        </div>

        <Modal isOpen={modal}
                toggle={toggle}
                backdrop={true}>
                <ModalHeader>
                    Looking for violence from the footage
                </ModalHeader>
                <ModalBody>
                    <div className="center-clm">
                        <div className='mt-4' >
                            {
                                loading ?
                                <div className="center-clm">
                                    <Spinner style={{ width: '2rem', height: '2rem' }}
                                    children={false} />
                                    <h5 className='mt-3'>Looking for violence</h5>
                                </div>
                                :
                                found ?
                                <div className="">
                                    <h2 className='center'>Violence detected at:</h2>
                                    <h3 className='center'>{foundFrame} sec</h3>
                                    <h4 className='text-danger center'>Alerting ploice..</h4>
                                    <p className='center'> <b>Location: </b> <i>Chatrapathi nagar</i></p>
                                </div>
                                :
                                <div className="">
                                    <h2 className='text-danger'>No Violence</h2>
                                </div>
                            }
                        </div>
                    </div>
                </ModalBody>
        </Modal>
    </div>
  )
}

export default PublicViolence