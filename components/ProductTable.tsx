import Link from 'next/link';
import { resolveAffiliateUrl } from '../lib/affResolver';

export type Product = {
  brand: string;
  feature: string;
  price: string;
  url?: string;
};

export default function ProductTable({ items }: { items: Product[] }) {
  return (
    <div className="card mt-6">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-gray-50">
              <th>ยี่ห้อ</th>
              <th>คุณสมบัติเด่น</th>
              <th>ราคาโดยประมาณ</th>
              <th>ซื้อ</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p, i) => {
              const href = resolveAffiliateUrl(p);
              return (
                <tr key={i}>
                  <td className="font-medium">{p.brand}</td>
                  <td>{p.feature}</td>
                  <td>{p.price}</td>
                  <td>
                    <Link href={href} className="btn btn-primary" target="_blank" rel="nofollow sponsored noopener">
                      กดซื้อที่ Shopee
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        *ลิงก์ด้านบนเป็นลิงก์ Affiliate อาจทำให้ผู้เขียนได้รับค่าคอมมิชชั่นเล็กน้อย โดยไม่มีค่าใช้จ่ายเพิ่มสำหรับผู้อ่าน
      </p>
    </div>
  );
}
