export default function Footer() {
  return (
    <footer className="bg-[#006E61] text-gray-100 py-6 mt-10 text-center border-t border-pharosGold/50">
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} Pharos Nigeria Community. All rights reserved.
      </p>

      <div className="space-x-4">
        <a
          href="https://x.com/pharosnetwork"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pharosGold hover:underline"
        >
          Follow us on X
        </a>
        <span>•</span>
        <a
          href="#"
          className="text-pharosGold hover:underline"
        >
          Join Telegram
        </a>
      </div>
    </footer>
  );
}
