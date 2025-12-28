import MapView from "./components/map/MapView";

const App = () => {
  return (
    <div className="h-screen w-screen flex bg-slate-100">
      
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-200 p-4">
        <h1 className="text-xl font-semibold text-slate-800">
          Area Measurement Tool
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Draw shapes on map to calculate area
        </p>
      </aside>

      {/* Map */}
      <main className="flex-1">
        <MapView />
      </main>

    </div>
  );
};

export default App;
