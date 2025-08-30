# SafeLove — SEO Blog + Shopee Affiliate (Next.js + Tailwind)

โปรเจกต์ตัวอย่างสำหรับคอนเทนต์ความรู้เรื่องเพศสัมพันธ์ + รีวิวสินค้า พร้อมลิงก์ Shopee Affiliate

## เริ่มใช้งาน

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## Build & Deploy (Vercel)
- ตั้ง `SITE_URL` ใน Environment Variables บน Vercel (เช่น https://yourdomain.com)
- เมื่อรัน `npm run build` ระบบจะสร้าง `sitemap.xml` + `robots.txt` อัตโนมัติ

## เพิ่มบทความ
- เพิ่มไฟล์ `.md` ใน `content/posts/` พร้อม frontmatter:
  - `title`, `description`, `date`, `category`
  - `affiliate` (ตารางสินค้า), `faq` (คำถามที่พบบ่อย)
- โพสต์จะถูกอ่านอัตโนมัติและสร้างหน้า `/posts/[slug]`

## โฟลเดอร์สำคัญ
- `pages/` เส้นทางเพจหลัก (หน้าแรก, about, category, post)
- `components/` Layout, ProductTable, FAQ, Breadcrumbs
- `lib/posts.ts` อ่าน Markdown + แปลงเป็น HTML
- `content/posts/*.md` ตัวอย่างบทความพร้อม affiliate & FAQ

## SEO
- `next-seo` กำหนดค่าเริ่มต้นใน `_app.tsx`
- JSON-LD (Article) ในหน้าโพสต์ + JSON-LD (FAQ) เมื่อมี `faq`
- `next-sitemap` สร้าง Sitemap/Robots อัตโนมัติ
