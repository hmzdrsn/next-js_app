// pages/api/data.js
import { ConnectionPool } from 'mssql';

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE, // Veritabanı adı
    options: {
        encrypt: true,        
        trustServerCertificate: true, // Sertifika güvenini atlamak için
    },
};

export default async function handler(req, res) {
    let pool;
    try {
        pool = await new ConnectionPool(config).connect();
        console.log('Bağlantı başarılı!'); // Bağlantının başarılı olduğunu konsola yazdır
        const result = await pool.request().query('SELECT * FROM Products'); // Tablo adınızı buraya yazın
        res.status(200).json(result.recordset); // Verileri döndür
    } catch (error) {
        console.error('Bağlantı hatası:', error); // Hata mesajını konsola yazdır
        res.status(500).json({ error: 'Veri çekme hatası' });
    } finally {
        if (pool) {
            await pool.close(); // Bağlantıyı kapat
        }
    }
}
