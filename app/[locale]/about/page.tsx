import React from "react";

const page = () => {
  return (
    <div className="bg-blue-950 text-white min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-amber-500 mb-6 text-center">
          Hakkımızda
        </h1>
        <p className="text-lg leading-relaxed text-center mb-12">
          Butik otelimiz, misafirlerimize eşsiz bir konfor ve huzur deneyimi
          sunmak için tasarlanmıştır. Doğanın kalbinde yer alan otelimiz, modern
          olanaklarla donatılmış odaları ve sıcak atmosferiyle unutulmaz bir
          konaklama deneyimi vaat ediyor. 2010 yılında kurulan otelimiz, yıllar
          içinde misafirlerimizin ihtiyaçlarına göre kendini sürekli yenileyerek
          hizmet kalitesini artırmıştır. İlk günden bu yana, misafirlerimize en
          iyi deneyimi sunmayı hedefleyen bir anlayışla çalışıyoruz. Doğal
          güzelliklerin içinde yer alan otelimiz, hem yerel hem de uluslararası
          misafirler için bir cazibe merkezi haline gelmiştir.
        </p>

        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          Misyonumuz
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Misyonumuz, misafirlerimize evlerindeki rahatlığı ve huzuru
          yaşatırken, aynı zamanda onlara unutulmaz anılar biriktirme fırsatı
          sunmaktır. Her detayda kalite ve müşteri memnuniyetini ön planda
          tutuyoruz.
        </p>
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          Vizyonumuz
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Vizyonumuz, butik otelcilik sektöründe yenilikçi ve öncü bir marka
          olarak tanınmak ve misafirlerimize her zaman en iyi hizmeti sunmaktır.
        </p>
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          Hizmetlerimiz
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
          <li>Modern ve konforlu odalar</li>
          <li>Gurme restoran ve yerel lezzetler</li>
          <li>Spa ve wellness hizmetleri</li>
          <li>Doğa yürüyüşleri ve aktiviteler</li>
          <li>Özel etkinlik ve organizasyon alanları</li>
        </ul>
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">İletişim</h2>
        <p className="text-lg leading-relaxed">
          Daha fazla bilgi almak veya rezervasyon yapmak için bizimle iletişime
          geçebilirsiniz. Sizi ağırlamaktan mutluluk duyarız!
        </p>
      </div>
    </div>
  );
};

export default page;
