
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddItem({ onAdd }) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Makanan')

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim() || price === '' || Number(price) < 0) {
      return
    }

    onAdd({
      name: name.trim(),
      price: Number(price),
      category,
    })

    navigate('/belanja')
  }

  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">BARANG BARU</p>
          <h1>Tambah Barang</h1>
          <p className="subtitle">
            Masukkan barang yang ingin kamu beli.
          </p>
        </div>
      </header>

      <section className="content-card form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama Barang</label>
            <input
              id="name"
              type="text"
              placeholder="Contoh: Roti tawar"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Harga (Rp)</label>
            <input
              id="price"
              type="number"
              min="0"
              placeholder="Contoh: 15000"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Kategori</label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>Makanan</option>
              <option>Minuman</option>
              <option>Kebutuhan Rumah</option>
              <option>Perawatan Diri</option>
              <option>Lainnya</option>
            </select>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate('/belanja')}
            >
              Batal
            </button>

            <button type="submit" className="primary-button">
              Simpan Barang
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
