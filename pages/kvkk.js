import Head from "next/head";

export default function Kvkk() {
  return (
    <>
      <Head>
        <title>KVKK | Beyaz Eşya Servis</title>
        <meta
          name="description"
          content="Beyaz Eşya Servis KVKK Aydınlatma Metni. Kişisel verileriniz nasıl saklanır, işlenir ve korunur?"
        />
      </Head>
      <div className="container py-5">
        <h1 className="mb-4">KVKK Aydınlatma Metni</h1>
        <p>
          Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu
          (“KVKK”) kapsamında; yalnızca sizinle iletişime geçmek ve servis
          taleplerinizi karşılamak amacıyla işlenmektedir.
        </p>
        <ul>
          <li>
            Kişisel verileriniz hiçbir şekilde üçüncü kişilerle paylaşılmaz.
          </li>
          <li>
            Veri sahibi olarak info@beyazesyaservis.com adresinden bize ulaşarak
            verilerinizle ilgili her türlü talepte bulunabilirsiniz.
          </li>
          <li>Verileriniz KVKK ve ilgili mevzuat kapsamında korunur.</li>
        </ul>
      </div>
    </>
  );
}
