import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <ul className="list-inline mb-2">
          <li className="list-inline-item">
            <Link href="/">Ana sayfa</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/hakkimizda">Hakkımızda</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/iletisim">İletişim</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/gizlilik">Gizlilik politikası</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/kvkk">KVKK</Link>
          </li>
        </ul>
        <div className="mt-2 small text-danger fw-bold">
          Not: Sitemiz yetkili servis değildir. Sadece garantisi olmayan
          cihazlar için hizmet verilmektedir.
        </div>
        <div className="mt-1 text-muted small">
          &copy; {new Date().getFullYear()} Beyaz Eşya Servis
        </div>
      </div>
    </footer>
  );
}
