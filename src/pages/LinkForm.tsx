import { useState, type FormEvent } from 'react'

export default function LinkForm() {
  const [notice, setNotice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice('The form is ready, but link submissions are not connected to a server yet.')
  }

  return (
    <section className="link-form-content">
      <h1>Submit a Link</h1>
      <p className="link-form-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
        odio dui.
      </p>

      <form className="link-submission-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="submitter-name">Name or pseudonym</label>
          <input
            id="submitter-name"
            name="name"
            type="text"
            placeholder="Enter your name or pseudonym"
            autoComplete="name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="submitted-link">Link</label>
          <input
            id="submitted-link"
            name="link"
            type="url"
            placeholder="https://example.com"
            required
          />
        </div>

        <button className="link-submit-button" type="submit">Submit link</button>
        {notice && <p className="form-notice" role="status">{notice}</p>}
      </form>
    </section>
  )
}
