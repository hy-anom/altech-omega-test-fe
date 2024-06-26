import { forwardRef, useImperativeHandle, useRef } from "react";
import './Contact.scss';

const Contact = forwardRef((props, ref) => {
  const contactRef = useRef<null | HTMLDivElement>(null); 
  
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      if(contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }));

  return (
    <div id='contact' className='contact' ref={contactRef}>
      <h1>Jangan ragu hubungi kami.</h1>
      <div className='contact-form'>
        <h2>Kirim pesanmu sekarang</h2>
        <input type='text' placeholder='Nama'/>
        <input type='text' placeholder='Pesan'/>
        <input type='email' placeholder='Email'/>
        <input type='tel' placeholder='Nomor telepon'/>
        <button>Kirm</button>
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
});

export default Contact