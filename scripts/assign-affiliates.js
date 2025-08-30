// scripts/assign-affiliates.js
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDir = path.join(process.cwd(), "content", "posts");

// คีย์ลิงก์ที่จะวนใช้
const dealKeys = ["deal-1","deal-2","deal-3","deal-4","deal-5","deal-6","deal-7"];

function assignUrls(affiliateArr, offset) {
  if (!Array.isArray(affiliateArr)) return affiliateArr;
  return affiliateArr.map((item, idx) => {
    const key = dealKeys[(offset + idx) % dealKeys.length];
    return { ...item, url: `/go/${key}` };
  });
}

let fileOffset = 0;
for (const file of fs.readdirSync(postsDir).filter(f => f.endsWith(".md"))) {
  const full = path.join(postsDir, file);
  const raw = fs.readFileSync(full, "utf8");
  const parsed = matter(raw);

  if (Array.isArray(parsed.data.affiliate) && parsed.data.affiliate.length > 0) {
    parsed.data.affiliate = assignUrls(parsed.data.affiliate, fileOffset);
    const updated = matter.stringify(parsed.content, parsed.data, { language: "yaml" });
    fs.writeFileSync(full, updated, "utf8");
    console.log("Updated:", file);
    fileOffset++; // เปลี่ยน offset ต่อไฟล์เพื่อกระจายลิงก์
  }
}
console.log("Done.");
