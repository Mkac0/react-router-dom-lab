import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const App = () => {
  const [mailbox, setMailbox] = useState();

  return (
    <>
      <NavBar />
      <h1>Hello world!</h1>
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path='/mailboxes' element={<h2>Mailboxes</h2>} />
        <Route path='mailboxes/new-mailbox' element={<h2>New Mailbox</h2>} />
        <Route
          path='/mailboxes/::mailboxId'
          element={<MailboxDetails mailbox={mailbox} />}  
        />
      </Routes>
    </>
  );
}

export default App;
