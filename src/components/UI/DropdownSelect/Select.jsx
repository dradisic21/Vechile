import "./Select.css";

export function Select(props) {
  let vehicleMakes = [];

  for (let [key, value] of props.vehicleMakeMap.entries()) { 
    vehicleMakes.push(value);
  }

  return (
    <div className="select-form">
      <label htmlFor="cars">Car Brand</label>
      <div>
        <select id="cars" value={props.value} onChange={props.onChange}>
          <option value="">Select a car brand</option>
          {vehicleMakes && vehicleMakes.map(item => {
            return <option key={item.id} value={item.id}>{item.name}</option>
          })}

        </select>
      </div>
    </div>
  );
}
