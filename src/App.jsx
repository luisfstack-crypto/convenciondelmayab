import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-brand-surface font-sans antialiased text-brand-dark">
      {/* Navbar will go here */}
      
      <main className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Convención <span className="text-brand-gold">del Mayab</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your faith, your moments, your connections.
          </p>
        </header>

        {/* Content sections will go here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-40 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center italic text-gray-400">
            Church cards coming soon...
          </div>
          <div className="h-40 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center italic text-gray-400">
            Church cards coming soon...
          </div>
          <div className="h-40 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center italic text-gray-400">
            Church cards coming soon...
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;