วิธีใช้แพตช์:
1) แตกไฟล์ ZIP นี้ไว้ที่ root โปรเจกต์ (ทับไฟล์เดิม)
2) ตรวจว่าโครงสร้างมีไฟล์:
   - data/affiliateLinks.ts
   - pages/api/go/[id].ts
   - lib/affResolver.ts
   - components/ProductTable.tsx (อัปเดต)
   - scripts/assign-affiliates.js
3) เพิ่ม script ใน package.json:
   "migrate:aff": "node scripts/assign-affiliates.js"
4) รันอัปเดตลิงก์ในโพสต์:
   npm run migrate:aff
   git add . && git commit -m "centralized affiliate routing + link assign"
   git push
5) ต่อไปเปลี่ยนปลายทางลิงก์ได้ที่ไฟล์เดียว: data/affiliateLinks.ts
