import Head from "next/head";
import Link from "next/link";
import BeyazEsyaMakale from "@/components/BeyazEsyaMakale";
const sahteYorumlar = [
  {
    isim: "Ahmet K.",
    yorum: "Hizmetten çok memnun kaldım, hızlı ve ilgili bir ekip!",
  },
  {
    isim: "Elif D.",
    yorum: "Buzdolabım bir günde tamir edildi, çok teşekkürler!",
  },
  {
    isim: "Murat Y.",
    yorum: "Fiyatlar uygun ve çalışanlar kibar. Tavsiye ederim.",
  },
  {
    isim: "Seda B.",
    yorum: "Klima bakımı için geldiler, işlerini iyi biliyorlar.",
  },
  {
    isim: "Deniz C.",
    yorum: "Kombi tamirinde titiz çalıştılar, tekrar arayacağım.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyaz Eşya Servis | Hızlı Teknik Servis</title>
        <meta
          name="description"
          content="Beyaz eşya, buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima, kombi ve televizyon tamiri için hemen bizi arayın. Yetkili servis değiliz. Garantisi olmayan cihazlara özel profesyonel hizmet."
        />
      </Head>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Solda metin, sağda resim */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-5 fw-bold mb-3">
              Hızlı ve Güvenilir{" "}
              <span className="text-primary">Beyaz Eşya Servisi</span>
            </h1>
            <p className="lead mb-4">
              Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima, kombi
              ve televizyon arızalarında garantisi bitmiş cihazlarınız için
              profesyonel tamir ve bakım çözümleri sunuyoruz.
            </p>
            <div className="d-flex gap-2 mb-3">
              <a
                href="tel:+905555555555"
                className="btn btn-success btn-lg px-4 fw-bold"
              >
                <i className="bi bi-telephone"></i> Hemen Ara
              </a>
              <Link
                href="/hizmet"
                className="btn btn-outline-primary btn-lg px-4"
              >
                Hizmetlerimizi Gör
              </Link>
            </div>
            <div className="alert alert-danger small fw-bold mt-3">
              Not: Sitemiz yetkili servis değildir. Sadece garantisi olmayan
              cihazlar için hizmet sunulmaktadır.
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="/images/beyazesya.webp"
              alt="Beyaz Eşya Servis"
              className="img-fluid rounded shadow"
              style={{ maxHeight: 350, objectFit: "cover", opacity: 0.92 }}
            />
          </div>
        </div>

        {/* Öne Çıkan Hizmetler */}
        <div className="my-5">
          <h2 className="h4 fw-bold text-center mb-4">
            En Çok Tercih Edilen Hizmetlerimiz
          </h2>
          <div className="row justify-content-center">
            {[
              {
                name: "Buzdolabı Servisi",
                icon: "bi bi-snow",
                href: "/hizmet?service=Buzdolabı",
              },
              {
                name: "Çamaşır Makinesi",
                icon: "bi bi-droplet",
                href: "/hizmet?service=Çamaşır+Makinesi",
              },
              {
                name: "Klima Bakım",
                icon: "bi bi-wind",
                href: "/hizmet?service=Klima",
              },
              {
                name: "Kombi Servisi",
                icon: "bi bi-thermometer",
                href: "/hizmet?service=Kombi",
              },
            ].map((h, i) => (
              <div className="col-6 col-md-3 mb-4" key={i}>
                <Link
                  href={h.href}
                  className="btn btn-light border w-100 py-3 shadow-sm d-flex flex-column align-items-center gap-2"
                >
                  <i className={`${h.icon} fs-2 text-primary`}></i>
                  <span className="fw-bold">{h.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Güven veren alt metin */}
        <div className="text-center mt-5 mb-3">
          <h3 className="fw-bold mb-2">Neden Bizi Tercih Etmelisiniz?</h3>
          <ul className="list-inline">
            <li className="list-inline-item mx-2">
              <i className="bi bi-check-circle-fill text-success"></i> Uygun
              Fiyat
            </li>
            <li className="list-inline-item mx-2">
              <i className="bi bi-check-circle-fill text-success"></i> Deneyimli
              Uzmanlar
            </li>
            <li className="list-inline-item mx-2">
              <i className="bi bi-check-circle-fill text-success"></i> Hızlı
              Müdahale
            </li>
            <li className="list-inline-item mx-2">
              <i className="bi bi-check-circle-fill text-success"></i> Yedek
              Parça Garantisi
            </li>
            <li className="list-inline-item mx-2">
              <i className="bi bi-check-circle-fill text-success"></i> Müşteri
              Memnuniyeti
            </li>
          </ul>
        </div>
        <div className="my-5">
          <h2 className="h5 fw-bold text-center mb-4">Müşteri Yorumları</h2>
          <div className="mx-auto" style={{ maxWidth: 600 }}>
            {sahteYorumlar.map((y, i) => (
              <div
                key={i}
                className="mb-3 p-3 border rounded shadow-sm bg-white d-flex align-items-center"
                style={{
                  borderLeft: "5px solid #0d6efd",
                  minHeight: 70,
                }}
              >
                {/* Avatar İkonu */}
                <div
                  className="d-flex justify-content-center align-items-center me-3"
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: "#e9ecef",
                  }}
                >
                  <i
                    className="bi bi-person-circle text-secondary"
                    style={{ fontSize: 30 }}
                  ></i>
                </div>
                <div>
                  <div className="mb-1 text-secondary small">{y.isim}</div>
                  <div className="fw-semibold" style={{ fontSize: 17 }}>
                    "{y.yorum}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <BeyazEsyaMakale />
        </div>
      </div>
    </>
  );
}
