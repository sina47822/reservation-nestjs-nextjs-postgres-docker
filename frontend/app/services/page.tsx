// frontend/src/pages/services.tsx
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    // فرضاً بک‌اند Endpointای برای سرویس‌ها دارد
    fetch('http://localhost:3001/business/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Business Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((svc) => (
          <div key={svc.id} className="p-4 border rounded">
            <h2 className="text-xl">{svc.name}</h2>
            <p>{svc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
