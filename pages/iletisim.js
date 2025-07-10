import { useState } from "react";
import Head from "next/head";

export default function Iletisim() {
  const [formAcik, setFormAcik] = useState(false);

  return (
    <>
      <Head>
        <title>İletişim | Beyaz Eşya Servis</title>
      </Head>
      <div className="container py-5" style={{ maxWidth: 600 }}>
        <h1 className="mb-4">İletişim</h1>
        <a
          href="tel:05555555555"
          className="btn btn-success btn-lg fw-bold mb-3"
          style={{ fontSize: 24 }}
        >
          Hemen Ara: 0555 555 55 55
        </a>
        <div>
          <a
            href="mailto:info@beyazesyaservis.com"
            className="btn btn-outline-primary fw-bold mb-3"
            style={{ fontSize: 22, display: "block" }}
          >
            Mail Gönder: info@beyazesyaservis.com
          </a>
        </div>
        <div className="mb-2">Adres: [Buraya açık adres gelecek]</div>
        <div className="mb-3">
          Form ile ulaşmak için{" "}
          <button
            className="btn btn-link p-0 align-baseline"
            style={{ fontSize: "inherit", textDecoration: "underline" }}
            onClick={() => setFormAcik((acik) => !acik)}
            type="button"
          >
            buraya tıklayın
          </button>
          .
        </div>

        {/* Form sadece formAcik true ise görünür */}
        {formAcik && (
          <div className="border rounded p-4 mt-3 bg-light">
            <form>
              <div className="mb-3">
                <label htmlFor="isim" className="form-label">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="isim"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefon" className="form-label">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefon"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-posta
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="mesaj" className="form-label">
                  Mesajınız
                </label>
                <textarea
                  className="form-control"
                  id="mesaj"
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Gönder
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
