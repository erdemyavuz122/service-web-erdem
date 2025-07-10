import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import ortakMakale from "../lib/makale";

// Hizmetler listesi (ikonları Bootstrap Icons ile)
const hizmetler = [
  {
    name: "Beyaz Eşya Servisi",
    desc: "Tüm beyaz eşyalarınız için tamir, bakım ve arıza servisi.",
    icon: "bi-house-gear",
  },
  {
    name: "Buzdolabı",
    desc: "Buzdolabı arıza, bakım ve onarımı.",
    icon: "bi-snow",
  },
  {
    name: "Çamaşır Makinesi",
    desc: "Çamaşır makinesi için uzman servis.",
    icon: "bi-droplet",
  },
  {
    name: "Bulaşık Makinesi",
    desc: "Bulaşık makinesi servis ve bakım.",
    icon: "bi-cup-straw",
  },
  {
    name: "Fırın",
    desc: "Fırın arıza ve onarımı.",
    icon: "bi-egg-fried",
  },
  {
    name: "Klima",
    desc: "Klima bakım, arıza ve tamir.",
    icon: "bi-wind",
  },
  {
    name: "Kombi",
    desc: "Kombi bakım, arıza ve servis.",
    icon: "bi-thermometer-half",
  },
  {
    name: "Televizyon",
    desc: "Televizyon tamir ve bakım servisi.",
    icon: "bi-tv",
  },
];

export default function Hizmet() {
  const router = useRouter();
  const { service } = router.query;

  // Eğer service parametresi yoksa: Kartlı ana hizmetler listesi
  if (!service) {
    return (
      <>
        <Head>
          <title>Hizmetlerimiz | Beyaz Eşya Servis</title>
          <meta
            name="description"
            content="Beyaz eşya, buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima, kombi ve televizyon servislerimiz hakkında detaylı bilgi alın."
          />
          <meta
            property="og:title"
            content="Buzdolabı Servisi | Beyaz Eşya Servis"
          />
          <meta
            property="og:description"
            content="Buzdolabı tamir, bakım ve onarımında uzman teknik servis."
          />
          <meta
            property="og:image"
            content="https://siteadresin.com/images/og-image.jpg"
          />
          <meta
            property="og:url"
            content="https://siteadresin.com/hizmet?service=Buzdolabı"
          />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Buzdolabı Servisi | Beyaz Eşya Servis"
          />
          <meta
            name="twitter:description"
            content="Buzdolabı tamir, bakım ve onarımında uzman teknik servis."
          />
          <meta
            name="twitter:image"
            content="https://siteadresin.com/images/og-image.jpg"
          />
        </Head>
        <div className="container py-5">
          <h1 className="mb-4 text-center">Hizmetlerimiz</h1>
          <div className="row justify-content-center">
            {hizmetler.map((hizmet, i) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
                key={i}
              >
                <div
                  className="card h-100 shadow-sm w-100"
                  style={{ borderRadius: "18px" }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: 80 }}
                  >
                    <i
                      className={`bi ${hizmet.icon} text-primary`}
                      style={{ fontSize: 48 }}
                    ></i>
                  </div>
                  <div className="card-body d-flex flex-column px-2 py-3">
                    <h6
                      className="card-title fw-bold mb-2 text-primary text-center"
                      style={{ fontSize: "1.05rem" }}
                    >
                      {hizmet.name}
                    </h6>
                    <p
                      className="card-text mb-3 text-center small"
                      style={{ minHeight: "36px" }}
                    >
                      {hizmet.desc}
                    </p>
                    <Link
                      href={`/hizmet?service=${encodeURIComponent(
                        hizmet.name
                      )}`}
                      className="btn btn-outline-primary btn-sm mt-auto mx-auto px-4"
                    >
                      Detaylı Bilgi
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-danger mt-5 fw-bold text-center">
            Not: Sitemiz yetkili servis değildir. Sadece garantisi olmayan
            cihazlar için hizmet sunulmaktadır.
          </div>
        </div>
      </>
    );
  }

  // Eğer service parametresi varsa: O hizmetin detay sayfası (ikonlu, makaleli)
  const hizmetAdi = service ? decodeURIComponent(service) : "";
  const hizmetData = hizmetler.find((h) => h.name === hizmetAdi);

  return (
    <>
      <Head>
        <title>{hizmetAdi} | Beyaz Eşya Servis</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: hizmetAdi, // Hizmetin adı (örn: Buzdolabı)
              description: hizmetData?.desc || "", // Kısa açıklama
              author: {
                "@type": "Organization",
                name: "Beyaz Eşya Servis",
              },
              publisher: {
                "@type": "Organization",
                name: "Beyaz Eşya Servis",
                logo: {
                  "@type": "ImageObject",
                  url: "https://siteadresin.com/images/logo.png", // Kendi logo URL’in
                },
              },
              mainEntityOfPage: `https://siteadresin.com/hizmet?service=${encodeURIComponent(
                hizmetAdi
              )}`,
            }),
          }}
        />
        <meta
          name="description"
          content={`${hizmetAdi} için hızlı, güvenilir ve uygun fiyatlı servis hizmetleri! Yetkili servis değiliz, sadece garantisi olmayan cihazlar için bakım ve onarım.`}
        />
      </Head>
      <div className="container py-5">
        {/* Başlık ve ikon yan yana */}
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <h1 className="mb-3" style={{ fontSize: 54, fontWeight: 700 }}>
            {hizmetAdi}
          </h1>
          <i
            className={`bi ${hizmetData?.icon || "bi-tools"} text-primary`}
            style={{ fontSize: 68, marginRight: 8 }}
          ></i>
        </div>

        {/* Uyarı */}
        <div className="alert alert-danger fw-bold mb-4">
          Dikkat: Bu site{" "}
          <span className="text-decoration-underline">
            yetkili servis değildir
          </span>
          . Sadece garantisi olmayan cihazlar için hizmet sunulmaktadır.
        </div>

        {/* Kısa açıklama */}
        <p style={{ fontSize: 20 }}>
          {hizmetData ? hizmetData.desc : ""}
          {hizmetData &&
            " alanında uzman ekibimiz ile cihazınızın arıza, bakım ve tamir işlemlerini hızlı ve güvenilir bir şekilde gerçekleştiriyoruz. Uygun fiyat avantajı ile aynı gün servis imkanı!"}
        </p>

        {/* Ortak Makale */}
        <div className="mt-5" style={{ fontSize: 17 }}>
          <div dangerouslySetInnerHTML={{ __html: ortakMakale }} />
        </div>

        {/* Geri dön butonu */}
        <Link href="/hizmet" className="btn btn-outline-secondary mt-4">
          &larr; Tüm Hizmetlere Geri Dön
        </Link>
      </div>
    </>
  );
}
