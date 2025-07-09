import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Beyaz Eşya Servis
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Ana sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/hizmet">
                Hizmetlerimiz
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/hakkimizda">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/iletisim">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
