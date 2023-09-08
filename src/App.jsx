import './App.css'
import Mobile from './assets/illustration-sign-up-mobile.svg'
import Desk from './assets/illustration-sign-up-desktop.svg'
import Thanks from './components/Thanks'
import { useState } from 'react'

function App() {

  let [emailV, setEmailV] = useState('');
  
  function submit(e) {
    
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let email = document.querySelector('#email');
    let modal = document.querySelector('.modal');
    let span = document.querySelector('span');

    e.preventDefault();
    
    if (validEmail.test(email.value.trim())) {

      modal.classList.add('success');
      email.classList.remove('error');
      span.classList.remove('error');
      
    } else {

      email.classList.add('error');
      span.classList.add('error');
    }

  }

  return (
    <>
      <section className='sign'>
        <div className='sign__content'>
            <h2>Stay updated!</h2>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <form>
              <div className='form__text'>
                <label htmlFor="email">Email address</label>
                <span>Valid email required</span>
              </div>
              <input type="email" id='email' onChange={() => setEmailV(email.value)} placeholder='email@company.com'/>
              <input type="submit" onClick={submit} value="Subscribe to monthly newsletter" />
            </form>
        </div>
        <picture>
          <source media='(min-width: 992px)' srcSet={Desk}/>
          <img src={Mobile} alt="mobile-illustration" />
        </picture>
      </section>
      <Thanks email={emailV}/>
    </>
  )
}

export default App
