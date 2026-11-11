
export default function History({ items }) {
  const history = items.filter((item) => item.bought)

  const formatPrice = (price) =>
    Number(price).toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    })

  const total = history.reduce((sum, item) => sum + Number(item.price), 0)

  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">RIWAYAT</p>
          <h1>Belanja Selesai</h1>
          <p className="subtitle">
            Barang yang sudah kamu tandai sebagai dibeli.
          </p>
        </div>
      </header>

      <section className="content-card">
        <div className="section-heading">
          <h2>{history.length} barang selesai</h2>
          <span className="history-total">{formatPrice(total)}</span>
        </div>

        {history.length === 0 ? (
          <p className="empty-state">
            Belum ada barang yang selesai dibeli.
          </p>
        ) : (
          history.map((item) => (
            <div className="shopping-item is-bought" key={item.id}>
              <span className="status-dot done" />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </div>
              <strong className="item-price">
                {formatPrice(item.price)}
              </strong>
            </div>
          ))
        )}
      </section>
    </>
  )
}
