import React from "react";
import Image from "next/image";

const page = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Oda",
      image:
        "https://images.unsplash.com/photo-1592229505801-77b31918d822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Suit Oda",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mostPreferredFromTeens: true,
    },
    {
      id: 3,
      name: "Standart Oda",
      image:
        "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mostPreferred: true,
    },
    {
      id: 4,
      name: "Aile Odası",
      image:
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Banyo",
      image:
        "https://plus.unsplash.com/premium_photo-1675744019064-55e970095927?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Mutfak",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Oturma Odası",
      image:
        "https://plus.unsplash.com/premium_photo-1671269943553-3781c823e625?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Balkon",
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Havuz Başı",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-blue-950 text-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-amber-500">
        Otel Odaları ve Alanları
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border border-amber-500 rounded-lg overflow-hidden shadow-md relative bg-white text-blue-950"
          >
            <Image
              src={room.image}
              alt={room.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            {room.mostPreferred && (
              <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                En Çok Tercih Edilen
              </span>
            )}
            {room.mostPreferredFromTeens && (
              <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                Gençlerin Tercihi
              </span>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{room.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
