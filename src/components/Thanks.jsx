import Check from '../assets/icon-success.svg'
import './Thanks.css'

const Thanks = ({email}) => {

function dissmiss() {

  let modal = document.querySelector('.modal');

  modal.classList.remove('success');
  
}

  return (
    <>
        <section className='modal'>
            <div>
                <img src={Check} alt="check" />
                <h2>Thanks for <br/> subscribing!</h2>
                <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>
                <button onClick={dissmiss}>Dissmiss message</button>
            </div>
        </section>
    </>
  )
}

export default Thanks