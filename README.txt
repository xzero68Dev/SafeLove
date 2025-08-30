Static sitemap pack for safe-love.vercel.app

1) Copy the `public/` folder from this pack into your project root (merge/overwrite).
2) Commit & push → Vercel will deploy the static sitemap immediately.
3) In Google Search Console, submit: https://safe-love.vercel.app/sitemap.xml
4) Optional: Temporarily comment-out "postbuild": "next-sitemap" in package.json to prevent regeneration.
   Later, when everything works, you can re-enable next-sitemap with correct SITE_URL.