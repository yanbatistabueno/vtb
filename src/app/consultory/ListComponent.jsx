import "./ListComponent.css";
export default function ListComponent(props) {
  return (
    <div className="list-container">
      <h3>
        <span>{props.title}</span>
      </h3>
      <ul className="item-list">
        {props.items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
