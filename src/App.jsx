import { useState } from 'react'
import '../src/styles/App.css'
import Header from './components/Header'
import Form from './components/Form'
import WhiteSpace from './components/WhiteSpace'
import Features from './components/Features'
import Footer from './components/Footer'


function App() {
  return (
    <div className='component'>
      <Header />
      < WhiteSpace/>
      <Form />
      <Features />
      <Footer/>
    </div>
  )
}

export default App
