import './Pricing.scss';

function Pricing() {
  return (
    <div className='pricing'>
      <h1>Fair pricing.</h1>
      <h4>Produk kami cocok untuk segala macam bisnis baik kecil maupun besar. Jika anda ragu anda bisa mencoba dulu secara gratis selama 1 bulan.</h4>

      <div className='pricing-card-wrapper'>
        <div className='pricing-card card-price-low'>
          <div>
            <h2 className='price-low'>Tier 1: Basic</h2>
            <h1 className='price-low'>Rp. 500rb</h1>
            <ul>
              <li>Mencatat barang masuk</li>
              <li>Mencatat barang keluar</li>
              <li>Mencatat hasil keuntungan</li>
            </ul>
          </div>
          <button>Coba Gratis 1 Bulan</button>
        </div>

        <div className='pricing-card card-price-mid'>
          <div>
            <h2 className='price-mid'>Tier 2: Business</h2>
            <h1 className='price-mid'>Rp. 1500rb</h1>
            <ul>
              <li>Mencatat barang masuk dan keluar</li>
              <li>Mencatat keuntungan</li>
              <li>Dapat menganalisa hasil penjualan dengan CHART</li>
              <li>Support 7x24 Jam</li>
            </ul>
          </div>
          <button>Beli</button>
        </div>

        <div className='pricing-card card-price-high'>
          <div>
            <h2 className='price-high'>Tier 3: Enterpreneur</h2>
            <h1 className='price-high'>Rp. 2500rb</h1>
            <ul>
              <li>Mencatat barang masuk dan keluar</li>
              <li>Mencatat keuntungan</li>
              <li>Dapat menganalisa hasil penjualan dengan CHART</li>
              <li>Support 7x24 jam</li>
              <li>Export data ke Excel</li>
              <li>AI Prediksi penghasilan</li>
            </ul>
          </div>
          <button>Beli</button>
        </div>

      </div>
    </div>
  )
}

export default Pricing