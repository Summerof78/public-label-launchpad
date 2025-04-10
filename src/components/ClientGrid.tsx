import React from 'react';

type ClientProps = {
  section: string;
  subsection?: string;
};

const ClientGrid: React.FC<ClientProps> = ({ section, subsection }) => {
  const clients = [
    // Row 1
    { name: "ABInBev", logo: "/public/lovable-uploads/51b670bc-87f6-47a4-adf0-422bf7ae8a60.png", x: 0, y: 0 },
    { name: "Moët Hennessy", logo: "/public/lovable-uploads/1e991197-2bdd-418f-a59a-5ea151fd0720.png", x: 1, y: 0 },
    { name: "SOLO", logo: "/public/lovable-uploads/7826e542-9c73-4eea-8d1f-381266f8a62d.png", x: 2, y: 0 },
    { name: "ORIGAMI SAKE", logo: "/public/lovable-uploads/67e2c708-0665-474e-bd4e-75dc25755e1e.png", x: 3, y: 0 },
    { name: "COLORADO Wine Industry", logo: "/public/lovable-uploads/8c790832-84fe-4ae2-9cc2-44fc4096c307.png", x: 4, y: 0 },
    { name: "FRENCH BLOOM", logo: "/public/lovable-uploads/80ccb055-2ff6-4a7b-99c3-d81c2da93086.png", x: 5, y: 0 },
    { name: "Dreyer's", logo: "/public/lovable-uploads/7c428ea6-89f4-457c-8a9c-b7cbaf158727.png", x: 6, y: 0 },
    // Row 2
    { name: "Virgin HOTELS", logo: "/public/lovable-uploads/fc6eb4a8-3903-4d5f-88d4-deb17be45878.png", x: 0, y: 1 },
    { name: "Virgin VOYAGES", logo: "/public/lovable-uploads/ebbbd6df-8ceb-4106-87cc-10398f994f5d.png", x: 1, y: 1 },
    { name: "FEVER-TREE", logo: "/public/lovable-uploads/70713b65-a0fa-477c-bb08-d623129418a7.png", x: 2, y: 1 },
    { name: "Spectrum", logo: "/public/lovable-uploads/adbf9546-52b2-4643-93d8-c1f0279ca7ef.png", x: 3, y: 1 },
    { name: "VIA CAROTA", logo: "/public/lovable-uploads/2c2fb330-1008-417c-9e5f-e8585e2f1862.png", x: 4, y: 1 },
    { name: "RITTER SPORT", logo: "", x: 5, y: 1 }, // Missing logo
    { name: "MARS", logo: "", x: 6, y: 1 }, // Missing logo
    // Row 3
    { name: "WOW!", logo: "", x: 0, y: 2 }, // Missing logo
    { name: "Scotts", logo: "", x: 1, y: 2 }, // Missing logo
    { name: "Dairy Farmers of America", logo: "", x: 2, y: 2 }, // Missing logo
    { name: "MITSUBISHI", logo: "", x: 3, y: 2 }, // Missing logo
    { name: "Hilton", logo: "", x: 4, y: 2 }, // Missing logo
    { name: "STONEWALL KITCHEN", logo: "", x: 5, y: 2 }, // Missing logo
    { name: "GODIVA", logo: "", x: 6, y: 2 }, // Missing logo
    // Row 4
    { name: "TORO", logo: "", x: 0, y: 3 }, // Missing logo
    { name: "WORKPLACE RESOURCE", logo: "", x: 1, y: 3 }, // Missing logo
    { name: "CHURCH & DWIGHT", logo: "", x: 2, y: 3 }, // Missing logo
    { name: "PROXIMO", logo: "", x: 3, y: 3 }, // Missing logo
    { name: "BRONCO", logo: "", x: 4, y: 3 }, // Missing logo
    { name: "RBC", logo: "", x: 5, y: 3 }, // Missing logo
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
