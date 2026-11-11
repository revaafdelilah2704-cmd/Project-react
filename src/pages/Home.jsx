
import { Link } from 'react-router-dom'
import SummaryCard from '../components/SummaryCard'

export default function Home({ items }) {
  const bought = items.filter((item) => item.bought).length
  const totalPrice = items.reduce((sum, item) => sum + Number(item.price), 0)

  const formatPrice = (price) =>
    price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    })

  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">BERANDA</p>
          <h1>Halo, selamat datang!</h1>
          <p className="subtitle">
            Atur kebutuhan belanja kamu dengan lebih mudah.
          </p>
        </div>
      </header>

      <section className="summary-grid">
        <SummaryCard
          title="Total Barang"
          value={items.length}
          description="Barang dalam daftar"
        />

        <SummaryCard
          title="Sudah Dibeli"
          value={bought}
          description={`${items.length ? Math.round((bought / items.length) * 100) : 0}% selesai`}
        />

        <SummaryCard
          title="Total Anggaran"
          value={formatPrice(totalPrice)}
          description="Perkiraan seluruh barang"
        />
      </section>

      <section className="content-card">
        <div className="section-heading">
          <div>
            <h2>Daftar Belanja</h2>
            <p className="subtitle">Barang yang perlu kamu siapkan.</p>
          </div>

          <Link to="/belanja" className="text-link">
            Lihat semua →
          </Link>
        </div>

        {items.length === 0 ? (
          <p className="empty-state">Belum ada barang. Yuk, tambahkan dulu!</p>
        ) : (
          <div className="home-list">
            {items.slice(0, 4).map((item) => (
              <div className="home-item" key={item.id}>
                <span className={`status-dot ${item.bought ? 'done' : ''}`} />
                <span className={item.bought ? 'item-completed' : ''}>
                  {item.name}
                </span>
                <strong>{formatPrice(Number(item.price))}</strong>
              </div>
            ))}
          </div>
        )}

        <Link to="/tambah" className="primary-button">
          + Tambah Barang
        </Link>
      </section>
    </>
  )
}
