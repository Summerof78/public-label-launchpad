
import React from 'react';

type ClientProps = {
  section: string;
  subsection?: string;
};

const ClientGrid: React.FC<ClientProps> = ({ section, subsection }) => {
  // Using different placeholder images to create visual variety
  const placeholderImages = [
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=200&h=100&fit=crop"
  ];

  const getPlaceholderImage = (index: number) => {
    return placeholderImages[index % placeholderImages.length];
  };

  const clients = [
    // Row 1
    { name: "ABInBev", logo: getPlaceholderImage(0), x: 0, y: 0 },
    { name: "Moët Hennessy", logo: getPlaceholderImage(1), x: 1, y: 0 },
    { name: "SOLO", logo: getPlaceholderImage(2), x: 2, y: 0 },
    { name: "ORIGAMI SAKE", logo: getPlaceholderImage(3), x: 3, y: 0 },
    { name: "COLORADO Wine Industry", logo: getPlaceholderImage(4), x: 4, y: 0 },
    { name: "FRENCH BLOOM", logo: getPlaceholderImage(0), x: 5, y: 0 },
    { name: "Dreyer's", logo: getPlaceholderImage(1), x: 6, y: 0 },
    // Row 2
    { name: "Virgin HOTELS", logo: getPlaceholderImage(2), x: 0, y: 1 },
    { name: "Virgin VOYAGES", logo: getPlaceholderImage(3), x: 1, y: 1 },
    { name: "FEVER-TREE", logo: getPlaceholderImage(4), x: 2, y: 1 },
    { name: "Spectrum", logo: getPlaceholderImage(0), x: 3, y: 1 },
    { name: "VIA CAROTA", logo: getPlaceholderImage(1), x: 4, y: 1 },
    { name: "RITTER SPORT", logo: getPlaceholderImage(2), x: 5, y: 1 },
    { name: "MARS", logo: getPlaceholderImage(3), x: 6, y: 1 },
    // Row 3
    { name: "WOW!", logo: getPlaceholderImage(4), x: 0, y: 2 },
    { name: "Scotts", logo: getPlaceholderImage(0), x: 1, y: 2 },
    { name: "Dairy Farmers of America", logo: getPlaceholderImage(1), x: 2, y: 2 },
    { name: "MITSUBISHI", logo: getPlaceholderImage(2), x: 3, y: 2 },
    { name: "Hilton", logo: getPlaceholderImage(3), x: 4, y: 2 },
    { name: "STONEWALL KITCHEN", logo: getPlaceholderImage(4), x: 5, y: 2 },
    { name: "GODIVA", logo: getPlaceholderImage(0), x: 6, y: 2 },
    // Row 4
    { name: "TORO", logo: getPlaceholderImage(1), x: 0, y: 3 },
    { name: "WORKPLACE RESOURCE", logo: getPlaceholderImage(2), x: 1, y: 3 },
    { name: "CHURCH & DWIGHT", logo: getPlaceholderImage(3), x: 2, y: 3 },
    { name: "PROXIMO", logo: getPlaceholderImage(4), x: 3, y: 3 },
    { name: "BRONCO", logo: getPlaceholderImage(0), x: 4, y: 3 },
    { name: "RBC", logo: getPlaceholderImage(1), x: 5, y: 3 },
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
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientGrid;
