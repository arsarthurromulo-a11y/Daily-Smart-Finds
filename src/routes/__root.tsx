import { createRootRoute, Outlet, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-[#F8F6F0] text-[#20252B]">
      <header className="border-b border-[#4F7194]/20 p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#20252B]">DAILY SMART FINDS</Link>
          <div className="space-x-6">
            <Link to="/tech-finds">Tech</Link>
            <Link to="/home-finds">Home</Link>
            <Link to="/buying-guides">Guides</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
      <footer className="border-t border-[#4F7194]/20 mt-12 p-6 text-center text-sm">
        <p>&copy; 2024 Daily Smart Finds. Better Deals. Smarter Living.</p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>
        </div>
      </footer>
    </div>
  ),
})
