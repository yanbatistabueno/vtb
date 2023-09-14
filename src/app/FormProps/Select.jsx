export default function Select(props) {
  return (
    <div>
      <div className="select-info">
        <p>{props.nome}:</p>
        {props.obrigatorio && <p className="obrigatorio">Campo obrigatório*</p>}
      </div>
      <select
        obrigatorio={`${props.obrigatorio ? true : false}`}
        name={props.altName}
        onChange={props.onChange}
        id={props.nome}
      >
        <option value="">Selecione</option>
        {props.arrayOptions.map((options, i) => {
          return (
            <option key={i} value={options}>
              {options}
            </option>
          );
        })}
      </select>
    </div>
  );
}
