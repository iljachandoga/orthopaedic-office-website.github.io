export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Hello World!
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Welcome to my TypeScript static site
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
          <p className="text-white">
            This is a simple static website built with TypeScript and React, 
            ready to be deployed on GitHub Pages.
          </p>
        </div>
      </div>
    </div>
  );
}
