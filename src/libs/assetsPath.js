export const assetPath = (path = "") => {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return bp || "";

  // ensure path starts with "/"
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // bp should NOT end with "/"
  const cleanBp = bp.endsWith("/") ? bp.slice(0, -1) : bp;

  return `${cleanBp}${cleanPath}`;
};
