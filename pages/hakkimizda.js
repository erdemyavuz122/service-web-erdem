import Head from "next/head";

export default function Hakkimizda() {
  return (
    <>
      <Head>
        <title>Hakkımızda | Beyaz Eşya Servis</title>
        <meta
          name="description"
          content="Beyaz Eşya Servis olarak beyaz eşya, buzdolabı, çamaşır ve bulaşık makinesi, fırın, klima, kombi ve televizyon tamir, bakım hizmetleri sunuyoruz. Yetkili servis değiliz."
        />
      </Head>
      <div className="container py-5">
        <h1 className="mb-4">Hakkımızda</h1>
        <p>
          Beyaz Eşya Servis; uzman ekibi ile garantisi bitmiş cihazlarınız için
          hızlı, ekonomik ve güvenilir tamir, bakım, arıza tespit hizmetleri
          sunar. Yıllardır sektör tecrübemiz ve müşteri memnuniyetimiz ile
          bölgenin önde gelen beyaz eşya servis firmalarından biriyiz.
        </p>
        <p className="fw-bold text-danger">
          Not: Sitemiz yetkili servis değildir. Yalnızca garantisi olmayan
          cihazlar için hizmet verilmektedir.
        </p>
      </div>
    </>
  );
}
