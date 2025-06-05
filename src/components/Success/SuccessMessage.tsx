import './SuccessMessage.css'
import successIcon from '../../assets/images/icon-success-check.svg'

export function SuccessMessage () {
  return (
    <article className="custom-toast">
        <div className="status">
          <img src={successIcon} alt="" />
          <span>Message Sent!</span>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
    </article>
  )
}