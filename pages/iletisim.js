import Head from "next/head";

export default function Iletisim() {
  return (
    <>
      <Head>
        <title>İletişim | Beyaz Eşya Servis</title>
        <meta
          name="description"
          content="Beyaz Eşya Servis iletişim bilgileri. Hemen arayın, hızlı servis alın!"
        />
      </Head>
      <div className="container py-5">
        <h1 className="mb-4">İletişim</h1>
        <div className="mb-3">
          <a
            href="tel:+905555555555"
            className="btn btn-success fw-bold"
            style={{ fontSize: "1.2rem" }}
          >
            Hemen Ara: 0555 555 55 55
          </a>
        </div>
        <div className="mb-3">
          <a
            href="mailto:info@beyazesyaservis.com"
            className="btn btn-outline-primary fw-bold"
            style={{ fontSize: "1.1rem" }}
          >
            Mail Gönder: info@beyazesyaservis.com
          </a>
        </div>
        <div className="mb-3">
          <p>Adres: [Buraya açık adres gelecek]</p>
        </div>
        <p>
          Form ile ulaşmak için{" "}
          <a href="mailto:info@beyazesyaservis.com">buraya tıklayın</a>.
        </p>
      </div>
    </>
  );
}
