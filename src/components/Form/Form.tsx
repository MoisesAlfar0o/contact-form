import './Form.css'
import { useFormValidation } from '../../hooks/useFormValidation'
import { toast } from 'sonner'
import { SuccessMessage } from '../Success/SuccessMessage'


export function Form () {
  const {
    register,
    handleSubmit,
    errors,
    reset
  } = useFormValidation()

  const onSubmit = handleSubmit(() => {
    toast(
      <SuccessMessage />,{ unstyled: true }
    )
    reset()
  })

  return (
    <section className='card-container'>
      <h1>Contact Us</h1>
      <form onSubmit={onSubmit} noValidate>
        <fieldset className="field-name">
          <div className="field-row">
            <div className="field-group">
              <label htmlFor='name'>First Name <span className="required">*</span></label>
              <input
                className={`input ${errors.name ? 'error-input' : ''}`} 
                id="name"
                type="text"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name', {
                  required: { value: true, message: 'This field is required' },
                  pattern: { value: /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/, message: 'Only letters are allowed'},
                  minLength: { value: 3, message: 'Must have at least 3 characters'}
                })}
              />
              {errors.name && <p id="name-error" className="error">{errors.name.message}</p>}
            </div>
            <div className="field-group">
              <label htmlFor='lastName'>Last Name <span className="required">*</span></label>
              <input
                className={`input ${errors.lastName ? 'error-input' : ''}`} 
                id="lastName"
                type="text"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                {...register('lastName', {
                  required: { value: true, message: 'This field is required' },
                  pattern: { value: /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/, message: 'Only letters are allowed'},
                  minLength: { value: 3, message: 'Must have at least 3 characters'}
                })}
              />
              {errors.lastName && <p id="lastName-error" className="error">{errors.lastName.message}</p>}
            </div>
          </div>
        </fieldset>
        <fieldset className="field-email">
          <label htmlFor='email'>Email Address <span className="required">*</span></label>
          <input
            className={`input ${errors.email ? 'error-input' : ''}`} 
            id="email"
            type="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email', {
              required: { value: true, message: 'This field is required' },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && <p id="email-error" className="error">{errors.email.message}</p>}
        </fieldset>
        <fieldset className="field-type">
          <label>Query Type <span className="required">*</span></label>
          <div className="field-radio">
            <label className="field-general">
              <input
                id="type-general"
                type="radio"
                value="general"
                aria-invalid={errors.type ? 'true' : 'false'}
                {...register('type', {
                  required: { value: true, message: 'Please select a query type' }
                })}
              />
              <span>General Enquiry</span>
            </label>
            <label className="field-support">
              <input
                id="type-support"
                type="radio"
                value="support"
                aria-invalid={errors.type ? 'true' : 'false'}
                {...register('type', {
                  required: { value: true, message: 'Please select a query type' }
                })}
              />
              <span>Support Request</span>
            </label>
          </div>
          {errors.type && <p id="type-error" className="error">{errors.type.message}</p>}
        </fieldset>
        <fieldset className="field-message">
          <label htmlFor='message'>Message <span className="required">*</span></label>
          <textarea 
            className={`textarea ${errors.message ? 'error-text' : ''}`}
            id="message"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message', {
              required: { value: true, message: 'This field is required' }
            })}
          />
          {errors.message && <p id="message-error" className="error">{errors.message.message}</p>}
        </fieldset>
        <fieldset className="field-agree">
          <div className="field-check">
            <input
              className={`input ${errors.name ? 'error-input' : ''}`} 
              id="agree"
              type="checkbox" 
              aria-invalid={errors.agree ? 'true' : 'false'}
              aria-describedby={errors.agree ? 'agree-error' : undefined}
              {...register('agree', {
                required: {
                  value: true,
                  message: 'To submit this form, please consent to being contacted'
                }
              })}
            />
            <label htmlFor='agree'>I consent to being contacted by the team <span className="required">*</span></label>
          </div>
          {errors.agree && <p id="agree-error" className="error">{errors.agree.message}</p>}
        </fieldset>
        <button className="btn" type="submit">Submit</button>
      </form>
    </section>
  )
}