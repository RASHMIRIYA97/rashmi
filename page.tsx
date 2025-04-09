export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white text-black">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Unlock Your Potential</h1>
        <p className="mb-6">Free Discovery Call + Audit to start your transformation journey.</p>
        <form className="mb-6">
          <input type="email" placeholder="Enter your email" className="border p-2 rounded mr-2" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Free Audit</button>
        </form>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <a href="#" className="border p-4 rounded shadow hover:shadow-lg">Digital Product 1</a>
          <a href="#" className="border p-4 rounded shadow hover:shadow-lg">Digital Product 2</a>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Book 1:1 Coaching</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Book a Call</button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">What Clients Say</h3>
          <p>"This coaching changed my life!" - Happy Client</p>
        </div>
      </div>
    </main>
  );
}
