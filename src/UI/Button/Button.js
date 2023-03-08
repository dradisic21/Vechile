import "./Button.css"

export default function Button(props) {
    return (
        <div>
            <button className={props.className} type={props.type} onClick={props.onClick}>{props.name}</button>
        </div>
    )
}