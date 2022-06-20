import React, { useState } from "react";
import Head from "next/head";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import Link from "next/link";

const Alerts = () => {

  const FeedData = [
    {
      title: 'Criminal detected',
      icon: 'bi bi-person-x',
      color: 'primary',
      date: '6 minute ago',
      id: 1,
    },
    {
      title: 'Fire detected',
      icon: 'bi bi-exclamation-triangle',
      color: 'info',
      date: '7 minute ago',
      id: 2,
    },
    {
      title: 'Accident detected',
      icon: 'bi bi-truck',
      color: 'danger',
      date: '16 minute ago',
      id: 3,
    } 
  ];

  return (
    <div>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Today Alerts
        </CardTitle>
        <CardBody className="">
        <ListGroup flush>
          {FeedData.map((feed) => (
            <ListGroupItem
              key={feed.id}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button className="rounded-circle me-3" size="sm" color={feed.color}>
                <i className={feed.icon} />
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">{feed.date}</small>
            </ListGroupItem>
          ))}
        </ListGroup>
        </CardBody>
      </Card>
    
    </div>
  );
};

export default Alerts;
