import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/">
          Beyaz Eşya Servis
        </Link>
        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={navOpen ? "true" : "false"}
          aria-label="Menüyü Aç/Kapat"
          onClick={() => setNavOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${navOpen ? " show" : ""}`}
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" href="/" onClick={closeNav}>
                Ana sayfa
              </Link>
            </li>
            {/* Hizmetlerimiz Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              style={{ position: "relative" }}
            >
              <Link
                href="/hizmet"
                className="nav-link dropdown-toggle"
                aria-expanded={dropdown ? "true" : "false"}
                id="hizmetlerimiz"
                role="button"
                tabIndex={0}
                onClick={closeNav}
              >
                Hizmetlerimiz
              </Link>
              <ul
                className={`dropdown-menu${dropdown ? " show" : ""}`}
                aria-labelledby="hizmetlerimiz"
                style={{
                  position: "absolute",
                  left: 0,
                  top: "100%",
                  zIndex: 1000,
                  display: dropdown ? "block" : "none",
                }}
              >
                {[
                  "Beyaz Eşya Servisi",
                  "Buzdolabı",
                  "Çamaşır Makinesi",
                  "Bulaşık Makinesi",
                  "Fırın",
                  "Klima",
                  "Kombi",
                  "Televizyon",
                ].map((servis, i) => (
                  <li key={i}>
                    <Link
                      className="dropdown-item"
                      href={`/hizmet?service=${encodeURIComponent(servis)}`}
                      onClick={closeNav}
                    >
                      {servis}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/hakkimizda" onClick={closeNav}>
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/iletisim" onClick={closeNav}>
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
