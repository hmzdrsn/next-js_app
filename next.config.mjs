/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_USER: 'hd664',
    DB_PASSWORD: '123',
    DB_SERVER: 'localhost',
    DB_DATABASE: 'B2B_ProjectDB',
},
};

export default nextConfig;