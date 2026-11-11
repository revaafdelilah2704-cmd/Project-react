
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-icon">S</span>
        <span>Shop<span className="pink-text">List</span></span>
      </div>

      <nav className="nav-menu">
        <NavLink to="/" end className="nav-link">
          <span>⌂</span> Beranda
        </NavLink>

        <NavLink to="/belanja" className="nav-link">
          <span>▤</span> Daftar Belanja
        </NavLink>

        <NavLink to="/tambah" className="nav-link">
          <span>＋</span> Tambah Barang
        </NavLink>

        <NavLink to="/riwayat" className="nav-link">
          <span>◷</span> Riwayat
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        Belanja jadi lebih teratur.
      </div>
    </aside>
  )
}
