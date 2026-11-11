
export default function ShoppingItem({ item, onToggle, onDelete }) {
  return (
    <div className={`shopping-item ${item.bought ? 'is-bought' : ''}`}>
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => onToggle(item.id)}
        aria-label={`Tandai ${item.name}`}
      />

      <div className="item-info">
        <h3>{item.name}</h3>
        <p>{item.category}</p>
      </div>

      <strong className="item-price">
        {Number(item.price).toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 0,
        })}
      </strong>

      <button
        className="delete-button"
        onClick={() => onDelete(item.id)}
        aria-label={`Hapus ${item.name}`}
        title="Hapus barang"
      >
        ×
      </button>
    </div>
  )
}
