import Head from "next/head";

export default function Gizlilik() {
  return (
    <>
      <Head>
        <title>Gizlilik Politikası | Beyaz Eşya Servis</title>
        <meta
          name="description"
          content="Beyaz Eşya Servis gizlilik politikası. Kişisel verilerin korunması ve gizliliğiniz için uyguladığımız prensipler hakkında bilgi alın."
        />
      </Head>
      <div className="container py-5">
        <h1 className="mb-4">Gizlilik Politikası</h1>
        <p>
          Beyaz Eşya Servis olarak, kişisel bilgilerinizin gizliliği ve
          güvenliği bizim için önemlidir. Sitemiz üzerinden paylaştığınız hiçbir
          bilgi, üçüncü kişilerle paylaşılmaz ve reklam amaçlı kullanılmaz.
        </p>
        <ul>
          <li>
            Siteyi ziyaret ettiğinizde çerezler sadece teknik amaçlı
            kullanılabilir.
          </li>
          <li>
            İletişim formu ile gönderdiğiniz bilgiler yalnızca sizinle iletişime
            geçmek için saklanır.
          </li>
          <li>
            Kişisel veriler KVKK'ya uygun şekilde korunur ve asla üçüncü
            şahıslarla paylaşılmaz.
          </li>
        </ul>
        <p>
          Detaylı bilgi için bize <a href="/iletisim">iletişim</a> sayfamızdan
          ulaşabilirsiniz.
        </p>
      </div>
    </>
  );
}
