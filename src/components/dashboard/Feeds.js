import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from 'reactstrap';

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

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Today alerts
        </CardSubtitle>
        <ListGroup flush className="mt-4">
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
          <Button
            color="success"
            tag="a"
            outline
            className="mt-3"
            href="/ui/alerts"
          >
            View more
          </Button>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
