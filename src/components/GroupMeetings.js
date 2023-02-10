import { Table } from 'react-bootstrap'

function formatDateTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString();
}

const GroupMeetings = (props) => {
  const meetings = props.groupObj
  if(Array.isArray(meetings) && props.selectedGroup!=='close'){
    return (
      <div className='p-5'>
          <Table striped bordered hover className="p-4 m-4">
            <thead>
              <tr>
                <th>meeting id</th>
                <th>starts at</th>
                <th>ends at</th>
                <th>room</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting) => (
                <tr key={meeting.id}>
                  <td>{meeting.meeting_id}</td>
                  <td>{formatDateTime(meeting.meeting_start)}</td>
                  <td>{formatDateTime(meeting.meeting_end)}</td>
                  <td>{meeting.meeting_room}</td>
                  <td>{meeting.meeting_description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
      </div>
    )
  }
}

export default GroupMeetings