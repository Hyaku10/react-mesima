import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Form } from 'react-bootstrap'
import axios from 'axios'

const ChooseGroup = (props) => {
  useEffect(() => {
    requestMeetings(props.selectedGroup)
  },[props.selectedGroup])

  const requestMeetings = async (group) => {
    if(group !== 'close'){
        try {
            const data = await axios.get(`http://localhost:3003/select/${group}`)
            props.setGroupObj(data.data ? data.data[0] : '626')
        } catch (error) {
            console.error(error)
        }
    }
  } 

  return (
    <div>
        <Card className="p-4 m-4">
            <Card.Header>Choose a group to display meetings or to add new meetings</Card.Header>
            <Card.Body>
                <Form.Select id='groupSelect' onChange={(e) => props.setSelectedGroup(e.currentTarget.value)}>
                  <option>close</option>
                  <option>Front end</option>
                  <option>Back end</option>
                  <option>Api</option>
                  <option>Human Resources</option>
                </Form.Select>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ChooseGroup