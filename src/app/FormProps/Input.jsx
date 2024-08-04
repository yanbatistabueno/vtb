export default function Input(props) {
  return (
    <div>
      {props.obrigatorio && <p className="obrigatorio">Campo Obrigatório*</p>}
      <input
        type={props.altName == "email" ? "email" : "text"}
        placeholder={props.nome}
        id={props.nome}
        name={props.altName ? props.altName : props.nome.toLowerCase()}
        onChange={props.onChange}
        obrigatorio={`${props.obrigatorio ? true : false}`}
        value={`${props.propsValue ? props.propsValue : ""}`}
      />
    </div>
  );
}
