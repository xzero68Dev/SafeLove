export const toGo = (id: string) => `/go/${id}`;
export const mapBrandToId: Record<string, string> = {
  "Durex Invisible": "deal-1",
  "Okamoto 003": "deal-2",
  "One Touch 003": "deal-3",
  "KY Jelly (Water-based)": "deal-4",
  "Pjur Original (Silicone)": "deal-5",
  "Sagami Original 0.02": "deal-6"
};

export function resolveAffiliateUrl(item: { url?: string; brand?: string }) {
  if (item?.url?.startsWith?.('/go/')) return item.url;
  const id = (item?.brand && mapBrandToId[item.brand]) || "deal-7";
  return toGo(id);
}
