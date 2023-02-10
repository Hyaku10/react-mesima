import { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'

const MeetingForm = (props) => {

  const [formData, setFormData] = useState({ start: '', end: '', description: '', room: '' })

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

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const sendDataObj = async (obj) => {
    try {
      await axios.post(`http://localhost:3003/meeting`, obj)
      window.alert('meeting saved successfully')
      requestMeetings(props.selectedGroup)
    } catch (error) {
      window.alert('something went wwrong')
      console.log(error)
    }
  }

  function convertToMySQLDateTime(isoString) {
    const date = new Date(isoString);
    return date.toISOString().slice(0, 19).replace('T', ' ');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { start, end, description, room } = formData
    if (start && end && description && room) {
      const newStart = new Date(start).toISOString()
      const newEnd = new Date(end).toISOString()
      const finalStart = convertToMySQLDateTime(newStart)
      const finalEnd = convertToMySQLDateTime(newEnd)
      const id = await getGroupId(props.selectedGroup)
      const formDataObj = { group: id.data, start: finalStart, end: finalEnd, description: description, room: room }
      sendDataObj(formDataObj)
    } else {
      window.alert('please fill out all the fields of the form')
    }
  }

  const getGroupId = async (group) => {
    const id = await axios.get(`http://localhost:3003/get_group_id/${group}`)
    return id
  }

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group controlId="startDate">
            <Form.Label>Meeting starts at</Form.Label>
            <Form.Control onChange={handleChange} name='start' type="datetime-local" placeholder="enter date" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="endDate">
            <Form.Label>Meeting ends at</Form.Label>
            <Form.Control onChange={handleChange} name='end' type="datetime-local" placeholder="enter date" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="description">
        <Form.Label>description</Form.Label>
        <Form.Control onChange={handleChange} name='description' type="text" placeholder="describe the meeting" />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>room</Form.Label>
        <Form.Control onChange={handleChange} name='room' type="text" placeholder="where is the meeting?" />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit" className='m-4'>
        Submit
      </Button>
    </Form>
  )
}

export default MeetingForm