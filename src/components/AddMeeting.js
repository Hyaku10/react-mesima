import React from 'react'
import MeetingForm from './MeetingForm'
import { Accordion } from 'react-bootstrap'

const AddMeeting = (props) => {
  if (props.selectedGroup !== 'close') {
    return (
      <div>
        <Accordion className="m-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>+ Add new meeting</Accordion.Header>
            <Accordion.Body>
              <MeetingForm className="p-4 m-4" 
              selectedGroup={props.selectedGroup} 
              setSelectedGroup={props.setSelectedGroup} 
              setGroupObj={props.setGroupObj}
              ></MeetingForm>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    )
  }
}

export default AddMeeting