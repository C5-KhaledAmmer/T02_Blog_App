import React from 'react'
import { Card,ListGroup } from 'react-bootstrap'

export const UserCard = ({user}) => {
    console.log(user);
  return (
    <Card style={{ width: '100%' }}>
        <div className='img-div'>
        <Card.Img  variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" />
        </div>
      
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>
          # of Posts: {user.posts.length}<br/>
          # of Albums: {user.albums.length}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Phone : {user.phone}</ListGroup.Item>
        <ListGroup.Item>Website : {user.website}</ListGroup.Item>
        <ListGroup.Item>Company : {user.company.name}</ListGroup.Item>
        <ListGroup.Item>Email : {user.email}</ListGroup.Item>
      </ListGroup>
      
    </Card>
  )
}
