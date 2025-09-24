import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = ({ boxOwner, boxSize }) => {
    setMailboxes(prev => [
      ...prev,
      { _id: prev.length + 1, boxOwner, boxSize }
    ]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<h2>Mailboxes</h2>} />
        <Route 
          path='mailboxes/new-mailbox' 
          element={<MailboxForm addBox={addBox} />} 
        />
        <Route
          path='/mailboxes/:mailboxId'
          element={<MailboxDetails mailboxes={mailboxes} />}  
        />
      </Routes>
    </>
  );
}

export default App;
