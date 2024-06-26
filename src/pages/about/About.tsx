import './About.scss';
import aboutTeam from '../../assets/about-team.png';


function About() {
  return (
    <div id='about' className='about'>
      <h1>Mengenal team kami.</h1>
      <div className='about-col-wrapper'>
         <div className='about-col'>
          <img className='about-team-image' src={aboutTeam} alt="My Image" />
         </div>
         <div className='about-col'>
          <p>
            Sebagai penyedia solusi ERP terbaik, kami menyadari betapa pentingnya produktivitas dan efisiensi. Solusi otomatis yang mendukung kegiatan operasional bisnis dapat memaksimalkan potensi perusahaan dan bersaing di pasar global. Oleh karena itu, pada 2015 lalu, kami mengambil kesempatan ini untuk membangun sebuah sistem berbasis cloud yang mengotomatiskan proses end-to-end operasi bisnis.
          </p>
          <p>
            Kami mengerti bahwa setiap perusahaan memiliki cara kerja yang unik. Kemampuan kami dalam membangun sebuah sistem yang dapat disesuaikan dengan kebutuhan klien adalah alasan mengapa kami dipercaya oleh lebih dari 1750 bisnis di Indonesia. Hal ini terus memotivasi kami untuk membawa manfaat dari software ERP ke jenis industri lain dengan solusi yang inovatif. Bagi kami, terus berkembang adalah kunci agar terus bisa memberikan dampak positif di ranah enterprise.
          </p>
         </div>
      </div>
    </div>
  )
}

export default About