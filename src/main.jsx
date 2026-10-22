import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app/landing/profile.css'
import reactImg from './assets/react.svg'
import LandingPage from './app/landing'

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>

      <h1>Hello Again!</h1>

  </StrictMode>,
)
*/

const rootElement = document.getElementById('root');
const rootDom = createRoot(rootElement);
/*
const paragraph = <p>Lorem ipsum dolor sit amet.</p>
const firstName = 'B';
const age = 27;

const h2Style = {color:'yellow', backgroundColor:'red'};


rootDom.render(
  <>
    {firstName &&<h1 className = "heading name title">Hello Bro, Name is {firstName}!</h1>}
    <h2 className = "Hello" style={h2Style}>Hello Again</h2>
    { age > 25 ? paragraph : ''}
  </>
)
*/

rootDom.render(
  <>

    <LandingPage/>
  
  </>
)