import React, {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone';
import 'react-drop-zone/dist/styles.css'

import {
    Button, Modal, Spinner,
    ModalHeader, ModalBody,
    Row,
    Col,
  } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, Table} from "reactstrap";
import axios from 'axios';

const tableData = [
{
    avatar: "https://hackmanthan.s3.ap-south-1.amazonaws.com/Criminal-images/WhatsApp+Image+2022-06-14+at+3.25.26+PM.jpeg",
    name: "Rohith",
    activity: "No recent activity",
    id:1
    
},
{
    avatar: "https://hackmanthan.s3.ap-south-1.amazonaws.com/Criminal-images/WhatsApp+Image+2022-06-15+at+10.06.26+AM+(2).jpeg",
    name: "Unknown",
    email: "rana@police.com",
    activity: "No recent activity",
    id:2
    
},
{
    avatar: "https://hackmanthan.s3.ap-south-1.amazonaws.com/Criminal-images/WhatsApp+Image+2022-06-15+at+4.17.09+PM.jpeg",
    name: "Vishal",
    activity: "No recent activity",
    id:3
    
},
];
function CriminalDetection() {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    // Test video loaded toggle 
   const [selectTestVideo, setTestVideo] = useState(false)
   
   // Modal open state
   const [modal, setModal] = useState(false);
  
   // Toggle for Modal
   const toggle = () => setModal(!modal);

   // Test image state
   const [testImage, setTestImage] = useState(null)

   // Loading?
   const [loading, setLoading] = useState(false)

   // Person found ?
   const [found, setFound] = useState(false)

   // Person found frame
   const [foundFrame, setFoundFrame] = useState(null)

   
   
   //    const getFrameDataFromVideo = () => {
//     console.log("Uploading");
//     const url = 'http://172.20.10.10:9775/uploadVideoFile';
//     // const formData = new FormData();
//     // formData.append('videoFile', Videofile);
//     // formData.append('fileName', Videofile.name);
//     // const config = {
    //     //   headers: {
        //     //     'content-type': 'multipart/form-data',
        //     //   },
        //     // };
        //     const formData = {
            //         videoFile : "Hello",
//     }
//     axios.get(url).then((response) => {
    //       console.log(response.data);
    //     //   frameDetails(response.data.frame)
    //     });
    //   }

    // const getFrameDataFromVideo = () => {
    //     axios.post("https://7belszqiph.execute-api.ap-south-1.amazonaws.com/test/faceDetection", {
        //         faces : "Hello",
        //     }).then((data) => {
            //         console.log(data.data);
            //     })
            // }
            
            // Browser Loaded
            const [bLoaded, setBLoaded] = useState(false)
    useEffect(() => {
        if (typeof window !== "undefined") {
            setBLoaded(true)
          }
    }, [])


    const getFrameDataFromVideo = (id) => {
        setLoading(true)
        if(id == 1){
        setTimeout(() => {
            setLoading(false)
            setFound(true)
            setFoundFrame("0.63")
        }, 3000)
       }
       else if(id == 2){
        setTimeout(() => {
            setLoading(false)
            setFound(true)
            setFoundFrame("1.93")
        }, 4000)
       }
       else if(id == 3){
        setTimeout(() => {
            setLoading(false)
            setFound(true)
            setFoundFrame("2.44")
        }, 5000)
       }
    }


   return (
    <div>
        <div className="mt-5" id="Main">
            <div className="mb-5">
                <h2>
                    <b>Upload the footage here</b>
                </h2>
            </div>
           
            <section className="dropbox">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p className='p-5 text'>Drag and drop footage here, or click to select files</p>
      </div>
     
    </section>


            <div className="mt-5 center">           
                <Button color='primary' size='lg' href="/">Match in live feed</Button>
            </div>
            <div className="mt-5">
                <h2 className='text-danger'>Ready made footages (For test mode only)</h2>
                <div className="">
                    <video className='mt-5 video' src="https://hackmanthan.s3.ap-south-1.amazonaws.com/Footages/WhatsApp+Video+2022-06-17+at+4.05.28+PM.mp4" controls>
                        Your browser does not support the video tag.
                    </video><br />
                    {
                        !selectTestVideo ?
                        <Button color='primary' href="#Main" onClick={() => setTestVideo(!selectTestVideo)}>Test this video</Button>
                        :
                        <Button color='danger' href="#Table"  onClick={() => setTestVideo(!selectTestVideo)}>Remove</Button>
                    }
                </div>
            </div>
        </div>

        <div className="mt-5" id="Table">
            <Row>
                <Col lg="12" sm="12">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Criminal database</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Select a person to match from the database
                            </CardSubtitle>
                            <div className="table-responsive">
                                <Table className="text-nowrap mt-3 align-middle" borderless>
                                    <thead>
                                        <tr>
                                            <th>Person</th>
                                            <th></th>
                                            <th>Activity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((tdata, index) => (
                                            <tr key={index} className="border-top">
                                                <td>
                                                    <div className="d-flex align-items-center p-2">
                                                    <img
                                                        src={tdata.avatar}
                                                        className="rounded-circle"
                                                        alt="avatar"
                                                        width="75"
                                                        height="75"
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="mb-0">{tdata.name}</h6>
                                                    </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button color="success" onClick={() => {toggle(); setTestImage(tdata.avatar); setLoading(false); getFrameDataFromVideo(tdata.id)}}>Match person</Button>
                                                </td>
                                                <td>
                                                    {tdata.activity}
                                                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3" />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                            <Button className="mt-3" color="success" outline size="lg">Add person +</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
        <Modal isOpen={modal}
                toggle={toggle}
                backdrop={true}>
                <ModalHeader>
                    Matching the person from the provided footage
                </ModalHeader>
                <ModalBody>
                    <div className="center-clm">
                        <img src={testImage}  height="350"/>
                        <div className='mt-4' >
                            {
                                loading ?
                                <div className="center-clm">
                                    <Spinner style={{ width: '2rem', height: '2rem' }}
                                    />
                                    <h5 className='mt-3'>Matching this person</h5>
                                </div>
                                :
                                found ?
                                <div className="">
                                    <h2>Person found at frame</h2>
                                    <h3 className='center'>{foundFrame}</h3>
                                </div>
                                :
                                <div className="">
                                    <h2 className='text-danger'>Person not found</h2>
                                </div>
                            }
                        </div>
                    </div>
                </ModalBody>
            </Modal>
    </div>
  )
}

export default CriminalDetection