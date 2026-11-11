
import { Link } from 'react-router-dom'
import ShoppingItem from '../components/ShoppingItem'

export default function ShoppingList({ items, onToggle, onDelete }) {
  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">DAFTAR BELANJA</p>
          <h1>Daftar Belanja Saya</h1>
          <p className="subtitle">
            Centang barang yang sudah selesai dibeli.
          </p>
        </div>
        <Link to="/tambah" className="primary-button compact-button">
          + Tambah
        </Link>
      </header>

      <section className="content-card">
        <div className="section-heading">
          <h2>Semua Barang ({items.length})</h2>
        </div>

        {items.length === 0 ? (
          <p className="empty-state">Daftar masih kosong.</p>
        ) : (
          items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </section>
    </>
  )
}
