const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(process.cwd(), 'content', 'posts');
const dealKeys = ['deal-1','deal-2','deal-3','deal-4','deal-5','deal-6','deal-7'];

function rotateUrls(aff, offset) {
  if (!Array.isArray(aff)) return aff;
  return aff.map((item, i) => ({
    ...item,
    url: `/go/${dealKeys[(offset + i) % dealKeys.length]}`
  }));
}

let offset = 0;
for (const file of fs.readdirSync(postsDir)) {
  if (!file.endsWith('.md')) continue;
  const fpath = path.join(postsDir, file);
  const raw = fs.readFileSync(fpath, 'utf8');
  const parsed = matter(raw);

  if (Array.isArray(parsed.data.affiliate) && parsed.data.affiliate.length > 0) {
    parsed.data.affiliate = rotateUrls(parsed.data.affiliate, offset);
    const updated = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(fpath, updated, 'utf8');
    console.log('Updated:', file);
    offset++;
  }
}
console.log('Done.');
