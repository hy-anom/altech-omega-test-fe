import './Contact.scss';

function Contact() {
  return (
    <div>
      <h1>Jangan ragu hubungi kami.</h1>
      <div className='contact-form'>
        <h2>Kirim pesanmu sekarang</h2>
        <input type='text' placeholder='Your name'/>
        <input type='email' placeholder='Email'/>
        <input type='text' placeholder='Message'/>
        <input type='tel' placeholder='Phone number'/>
        <button>Submit</button>
      </div>

      <div className='contact-info'>
        <div className='contact-info-capsule'>Informasi kontak</div>
        <h2>Anda bisa mendatangi kantor kami dibawah ini</h2>
        <div className='contact-card-wrapper'>
          <div className='contact-card'>
            <p>☎️</p>
            <h3>+82123123123</h3>
          </div>
          <div className='contact-card'>
            <p>📧</p>
            <h3>hello@altech.com</h3>
          </div>
          <div className='contact-card'>
            <p>🏢</p>
            <h3>Jakarta, Indonesia</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact