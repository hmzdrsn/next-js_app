// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data'); // API route'u çağır
        const result = await response.json();
        setData(result); // Veriyi state'e kaydet
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Ürün Verileri</h1>
      <ul>
        TotalPrice
        <hr></hr>
        {data.map((item) => (
          <li key={item.Id}> {item.Name} </li> // Örnek alan adı, kendi alan adınıza göre değiştirin
        ))}
      </ul>
    </div>
  );
}