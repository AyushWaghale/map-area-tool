const formatArea = (area) => {
  if (area > 1_000_000) {
    return `${(area / 1_000_000).toFixed(2)} km²`;
  }
  return `${area.toFixed(2)} m²`;
};

const AreaPanel = ({ shapes }) => {
  const polygons = shapes.filter(
    (shape) => shape.type === "polygon"
  );

  const totalArea = polygons.reduce(
    (sum, shape) => sum + shape.area,
    0
  );

  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold text-slate-700 mb-3">
        Area Summary
      </h2>

      {polygons.length === 0 ? (
        <p className="text-xs text-slate-500">
          Draw a polygon to calculate area
        </p>
      ) : (
        <ul className="space-y-2 text-sm">
          {polygons.map((shape, index) => (
            <li
              key={shape.id}
              className="flex justify-between bg-slate-50 p-2 rounded"
            >
              <span>Polygon {index + 1}</span>
              <span className="font-medium">
                {formatArea(shape.area)}
              </span>
            </li>
          ))}

          <li className="flex justify-between border-t pt-2 font-semibold">
            <span>Total</span>
            <span>{formatArea(totalArea)}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AreaPanel;
