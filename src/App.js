import './App.css'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ChooseGroup from './components/ChooseGroup'
import TopHeader from './components/TopHeader'
import GroupMeetings from './components/GroupMeetings'
import AddMeeting from './components/AddMeeting'

function App() {
  const [groupObj, setGroupObj] = useState({})
  const [selectedGroup, setSelectedGroup] = useState('close')

  return (
    <div className="App m-0" style={{backgroundColor: ('#66CDAA	'), height: '100vh'}}>
      <div className="m-5  border border-0 rounded" style={{backgroundColor: "aquamarine", height: '200vh'}}>
        <TopHeader className='m-0 p-0'/>
        <ChooseGroup  className="p-5 m-4" setGroupObj={setGroupObj} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}/>
        <GroupMeetings groupObj={groupObj} selectedGroup={selectedGroup}/>
        <AddMeeting selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} setGroupObj={setGroupObj}/>
      </div>
    </div>
  );
}

export default App

