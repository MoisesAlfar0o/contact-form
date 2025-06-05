import './App.css'
import { Form } from './components/Form/Form'
import { Toaster } from 'sonner'

function App() {
  return (
     <>
      <div className='container'>
        <Form />
      </div>
        <Toaster position="top-center" />
    </>
  )
}

export default App
