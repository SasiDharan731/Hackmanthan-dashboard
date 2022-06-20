import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardGroup,
    Button,
    Row,
    Col,
  } from "reactstrap";
function Cameras() {
  return (
    <div>
        <Row>
            <Col>
                <Card body>

                    <img style={{width: "100%"}} src="http://172.20.10.7:5001/video_feed" alt="" />
                    
                    <div className="mt-4">
                        <CardTitle tag="h5">CAM 01</CardTitle>
                       
                        <CardText>
                            Location: <i>Edit this</i> <br />
                            Recent Alerts: N/A
                        </CardText>
                    </div>
            
                </Card>
            </Col>

            <Col>
                <Card body>

                    <img style={{width: "100%"}} src="http://172.20.10.7:5001/video_feed" alt="" />
                    
                    <div className="mt-4">
                        <CardTitle tag="h5">CAM 02</CardTitle>
                        <CardText>
                            Location: <i>Edit this</i> <br />
                            Recent Alerts: N/A
                        </CardText>
                    </div>
            
                </Card>
            </Col>

            <Col>
                <Card body>

                    <img style={{width: "100%"}} src="http://172.20.10.7:5001/video_feed" alt="" />
                    
                    <div className="mt-4">
                        <CardTitle tag="h5">CAM 03</CardTitle>
                       
                        <CardText>
                            Location: <i>Edit this</i> <br />
                            Recent Alerts: N/A
                        </CardText>
                    </div>
            
                </Card>
            </Col>

           
        </Row>
    </div>
  )
}

export default Cameras