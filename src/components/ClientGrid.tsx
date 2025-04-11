
import React from 'react';

type ClientProps = {
  section: string;
  subsection?: string;
};

const ClientGrid: React.FC<ClientProps> = ({ section, subsection }) => {
  const clients = [
    // Row 1
    { name: "ABInBev", logo: "/lovable-uploads/51b670bc-87f6-47a4-adf0-422bf7ae8a60.png", x: 0, y: 0 },
    { name: "Moët Hennessy", logo: "/lovable-uploads/1e991197-2bdd-418f-a59a-5ea151fd0720.png", x: 1, y: 0 },
    { name: "SOLO", logo: "/lovable-uploads/7826e542-9c73-4eea-8d1f-381266f8a62d.png", x: 2, y: 0 },
    { name: "ORIGAMI SAKE", logo: "/lovable-uploads/67e2c708-0665-474e-bd4e-75dc25755e1e.png", x: 3, y: 0 },
    { name: "COLORADO Wine Industry", logo: "/lovable-uploads/8c790832-84fe-4ae2-9cc2-44fc4096c307.png", x: 4, y: 0 },
    { name: "FRENCH BLOOM", logo: "/lovable-uploads/80ccb055-2ff6-4a7b-99c3-d81c2da93086.png", x: 5, y: 0 },
    { name: "Dreyer's", logo: "/lovable-uploads/7c428ea6-89f4-457c-8a9c-b7cbaf158727.png", x: 6, y: 0 },
    // Row 2
    { name: "Virgin HOTELS", logo: "/lovable-uploads/fc6eb4a8-3903-4d5f-88d4-deb17be45878.png", x: 0, y: 1 },
    { name: "Virgin VOYAGES", logo: "/lovable-uploads/ebbbd6df-8ceb-4106-87cc-10398f994f5d.png", x: 1, y: 1 },
    { name: "FEVER-TREE", logo: "/lovable-uploads/70713b65-a0fa-477c-bb08-d623129418a7.png", x: 2, y: 1 },
    { name: "Spectrum", logo: "/lovable-uploads/adbf9546-52b2-4643-93d8-c1f0279ca7ef.png", x: 3, y: 1 },
    { name: "VIA CAROTA", logo: "/lovable-uploads/2c2fb330-1008-417c-9e5f-e8585e2f1862.png", x: 4, y: 1 },
    { name: "RITTER SPORT", logo: "/lovable-uploads/c5bca9eb-24fc-4186-a6f2-ba37a2437b9e.png", x: 5, y: 1 }, 
    { name: "MARS", logo: "/lovable-uploads/3b347a38-0eb0-46a3-9f52-0bb626656f2e.png", x: 6, y: 1 }, 
    // Row 3
    { name: "WOW!", logo: "/lovable-uploads/60b32c8d-5665-4b31-b203-2c4c79b01431.png", x: 0, y: 2 },
    { name: "Scotts", logo: "/lovable-uploads/9af13ab0-4a56-4fd1-ac8c-6f23c37f3410.png", x: 1, y: 2 },
    { name: "Dairy Farmers of America", logo: "/lovable-uploads/0d532dec-3c61-4880-ba61-a97819360068.png", x: 2, y: 2 },
    { name: "MITSUBISHI", logo: "/lovable-uploads/8d1170e0-2887-49ca-8248-c1ad2363edef.png", x: 3, y: 2 },
    { name: "Hilton", logo: "/lovable-uploads/8f8667ef-ce5a-421e-81ff-2e888d5b1ca7.png", x: 4, y: 2 },
    { name: "STONEWALL KITCHEN", logo: "/lovable-uploads/4869947a-34bd-476f-8299-609c784b326e.png", x: 5, y: 2 },
    { name: "GODIVA", logo: "/lovable-uploads/c4d81af4-e42a-4bdb-a8a4-044ffd86f9b3.png", x: 6, y: 2 },
    // Row 4
    { name: "TORO", logo: "/lovable-uploads/e3f27f54-3806-4080-a92d-22fdfb65db4d.png", x: 0, y: 3 },
    { name: "WORKPLACE RESOURCE", logo: "/lovable-uploads/ce9bc386-6a08-4957-a2b8-0f4165630bae.png", x: 1, y: 3 },
    { name: "CHURCH & DWIGHT", logo: "/lovable-uploads/54895cd7-93ad-4c59-ab2c-95a221b5bef1.png", x: 2, y: 3 },
    { name: "PROXIMO", logo: "/lovable-uploads/f79aaf88-db48-4fea-be8b-908ce51b727e.png", x: 3, y: 3 },
    { name: "BRONCO", logo: "/lovable-uploads/c5bca9eb-24fc-4186-a6f2-ba37a2437b9e.png", x: 4, y: 3 },
    { name: "RBC", logo: "/lovable-uploads/54895cd7-93ad-4c59-ab2c-95a221b5bef1.png", x: 5, y: 3 },
  ];

  return (
    <div className="py-10">
      <div className="text-center mb-10">
        {section && <h3 className="text-xl font-semibold tracking-tight text-primary mb-2 uppercase">{section}</h3>}
        {subsection && <p className="text-lg uppercase tracking-wider">{subsection}</p>}
      </div>
      <div className="grid grid-cols-7 gap-0 border border-gray-200">
        {clients.map((client, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center p-4 border border-gray-200 h-32 transition-opacity hover:opacity-80"
            style={{ gridColumn: client.x + 1, gridRow: client.y + 1 }}
          >
            <div className="h-16 flex items-center justify-center mb-2">
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-gray-400 text-sm">{client.name}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientGrid;
