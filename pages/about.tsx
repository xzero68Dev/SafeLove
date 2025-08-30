import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">About SafeLove</h1>
      <p className="text-gray-700">
        เราเชื่อว่าความรู้เรื่องเพศสัมพันธ์ที่ถูกต้องและปลอดภัยควรเข้าถึงได้ง่าย
        เว็บไซต์นี้มีทั้งบทความความรู้ รีวิวสินค้า และลิงก์ Affiliate ไปยัง Shopee
        ซึ่งอาจทำให้เราได้ค่าคอมมิชชั่นเล็กน้อย โดยไม่เพิ่มค่าใช้จ่ายให้ผู้อ่าน
      </p>
    </Layout>
  );
}
