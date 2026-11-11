
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ShoppingList from './pages/ShoppingList'
import AddItem from './pages/AddItem'
import History from './pages/History'

const initialItems = [
  { id: 1, name: 'Beras 5 kg', price: 75000, category: 'Makanan', bought: true },
  { id: 2, name: 'Telur Ayam', price: 28000, category: 'Makanan', bought: false },
  { id: 3, name: 'Minyak Goreng', price: 18000, category: 'Kebutuhan Rumah', bought: false },
  { id: 4, name: 'Susu UHT', price: 22000, category: 'Minuman', bought: false },
]

export default function App() {
  const [items, setItems] = useState(initialItems)

  function addItem(item) {
    setItems((prev) => [
      ...prev,
      { ...item, id: Date.now(), bought: false },
    ])
  }

  function toggleItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    )
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home items={items} />}
          />
          <Route
            path="/belanja"
            element={
              <ShoppingList
                items={items}
                onToggle={toggleItem}
                onDelete={deleteItem}
              />
            }
          />
          <Route
            path="/tambah"
            element={<AddItem onAdd={addItem} />}
          />
          <Route
            path="/riwayat"
            element={<History items={items} />}
          />
        </Routes>
      </main>
    </div>
  )
}
