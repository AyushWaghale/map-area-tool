import MapView from "./components/map/MapView";
import { useShapes } from "./hooks/useShapes";

const App = () => {
  const shapeStore = useShapes();

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
        <button
          onClick={shapeStore.undoLastShape}
          disabled={shapeStore.shapes.length === 0}
          className="mt-4 w-full rounded bg-slate-900 text-white py-2 text-sm disabled:opacity-40"
        >
          Undo Last Action
        </button>


        <div className="mt-6 text-sm text-slate-600">
          Shapes drawn: {shapeStore.shapes.length}
        </div>

      </aside>

      {/* Map */}
      <main className="flex-1">
        <MapView shapeStore={shapeStore} />

      </main>


    </div>
  );
};

export default App;
