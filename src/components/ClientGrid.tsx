
import React from 'react';

type ClientProps = {
  section: string;
  subsection?: string;
};

const ClientGrid: React.FC<ClientProps> = ({ section, subsection }) => {
  const clients = [
    // Row 1
    { name: "ABInBev", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 0, y: 0 },
    { name: "Moët Hennessy", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 1, y: 0 },
    { name: "SOLO", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 2, y: 0 },
    { name: "ORIGAMI SAKE", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 3, y: 0 },
    { name: "COLORADO Wine Industry", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 4, y: 0 },
    { name: "FRENCH BLOOM", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 5, y: 0 },
    { name: "Dreyer's", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 6, y: 0 },
    // Row 2
    { name: "Virgin HOTELS", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 0, y: 1 },
    { name: "Virgin VOYAGES", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 1, y: 1 },
    { name: "FEVER-TREE", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 2, y: 1 },
    { name: "Spectrum", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 3, y: 1 },
    { name: "VIA CAROTA", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 4, y: 1 },
    { name: "RITTER SPORT", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 5, y: 1 },
    { name: "MARS", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 6, y: 1 },
    // Row 3
    { name: "WOW!", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 0, y: 2 },
    { name: "Scotts", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 1, y: 2 },
    { name: "Dairy Farmers of America", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 2, y: 2 },
    { name: "MITSUBISHI", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 3, y: 2 },
    { name: "Hilton", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 4, y: 2 },
    { name: "STONEWALL KITCHEN", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 5, y: 2 },
    { name: "GODIVA", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 6, y: 2 },
    // Row 4
    { name: "TORO", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 0, y: 3 },
    { name: "WORKPLACE RESOURCE", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 1, y: 3 },
    { name: "CHURCH & DWIGHT", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 2, y: 3 },
    { name: "PROXIMO", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 3, y: 3 },
    { name: "BRONCO", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 4, y: 3 },
    { name: "RBC", logo: "/lovable-uploads/d6399d24-081a-4467-b0bd-f9e3490a16e7.png", x: 5, y: 3 },
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
              {/* When you upload actual logos, they'll replace the name display */}
              {/* <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-full max-w-full object-contain"
              /> */}
              <p className="text-center font-medium">{client.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientGrid;
