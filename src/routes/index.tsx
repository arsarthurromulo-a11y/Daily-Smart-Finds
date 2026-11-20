import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">BETTER DEALS. SMARTER LIVING.</h1>
        <p className="text-xl text-[#4F7194]">Curated daily finds for the modern home.</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Finds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-[#4F7194]/10">
              <div className="h-48 bg-[#F8F6F0] mb-4 rounded"></div>
              <h3 className="font-bold">Product {i}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
