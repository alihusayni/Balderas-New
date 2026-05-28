/**
 * Inline SVG badge icon — previously loaded via next/image from blob which
 * returns 400 for external SVGs (Next.js disallows SVG optimization by default).
 * Inline SVG also eliminates the network request entirely.
 */
export function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.0625 26.25V15.9688L0 9.375L5.78125 0H17.3438L23.125 9.375L19.0625 15.9688V26.25L11.5625 23.75L4.0625 26.25ZM7.1875 2.5L2.9375 9.375L7.1875 16.25H15.9375L20.1875 9.375L15.9375 2.5H7.1875ZM10.25 14.4688L5.8125 10.0625L7.59375 8.28125L10.25 10.9375L15.5313 5.625L17.3125 7.375L10.25 14.4688Z"
        fill="white"
      />
    </svg>
  );
}
