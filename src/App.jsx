import MapView from "./components/map/MapView";
import AreaPanel from "./components/ui/AreaPanel";
import { useShapes } from "./hooks/useShapes";

const App = () => {
  const shapeStore = useShapes();

  return (
    <div className="h-screen w-screen flex bg-slate-100">
      <aside className="w-80 bg-white border-r p-4">
        <h1 className="text-xl font-semibold text-slate-800">
          Area Measurement Tool
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Draw polygons to calculate area
        </p>

        <AreaPanel shapes={shapeStore.shapes} />
      </aside>

      <main className="flex-1">
        <MapView shapeStore={shapeStore} />
      </main>
    </div>
  );
};

export default App;
