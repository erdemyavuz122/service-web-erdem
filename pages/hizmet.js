import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

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

  // Query yoksa kartlar göster (Tüm hizmetler)
  if (!service) {
    return (
      <>
        <Head>
          <title>Hizmetlerimiz | Beyaz Eşya Servis</title>
          <meta
            name="description"
            content="Beyaz eşya, buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima, kombi ve televizyon servislerimiz hakkında detaylı bilgi alın."
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

  // Query varsa: Dinamik hizmet detay
  const hizmetAdi = service
    ? decodeURIComponent(service)
    : "Beyaz Eşya Servisi";
  const hizmetData = hizmetler.find((h) => h.name === hizmetAdi);

  return (
    <>
      <Head>
        <title>{hizmetAdi} | Beyaz Eşya Servis</title>
        <meta
          name="description"
          content={`${hizmetAdi} için hızlı, güvenilir ve uygun fiyatlı servis hizmetleri! Yetkili servis değiliz, sadece garantisi olmayan cihazlar için bakım ve onarım.`}
        />
      </Head>
      <div className="container py-5">
        <h1 className="mb-4">{hizmetAdi}</h1>
        <div
          className="d-flex justify-content-center align-items-center mb-4"
          style={{ height: 110 }}
        >
          <i
            className={`bi ${hizmetData?.icon || "bi-tools"} text-primary`}
            style={{ fontSize: 64 }}
          ></i>
        </div>
        <div className="alert alert-danger fw-bold mb-4">
          Dikkat: Bu site{" "}
          <span className="text-decoration-underline">
            yetkili servis değildir
          </span>
          . Sadece garantisi olmayan cihazlar için hizmet sunulmaktadır.
        </div>
        <p>
          {hizmetData ? hizmetData.desc : ""} alanında uzman ekibimiz ile
          cihazınızın arıza, bakım ve tamir işlemlerini hızlı ve güvenilir bir
          şekilde gerçekleştiriyoruz. Uygun fiyat avantajı ile aynı gün servis
          imkanı!
        </p>
        <Link href="/hizmet" className="btn btn-outline-secondary mt-3">
          &larr; Tüm Hizmetlere Geri Dön
        </Link>
      </div>
    </>
  );
}
