import Nav from "./components/nav"
import Header from './components/header'
import Form from './components/form'
import Button from './components/button'
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Nav />
      <main className="container">
        <Header title='Formulario y eventos' />
        <div>
          <Form
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </div>
        {password === '252525' && <Button/>}

        
      </main>

    
    </>
  )
}

export default App
