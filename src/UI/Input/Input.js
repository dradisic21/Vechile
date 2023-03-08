import "./Input.css"

export default function Input(props) {
  return (
    <>
      <label>
        {props.label}
        <div>
          <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
      </label>
    </>
  );
}
