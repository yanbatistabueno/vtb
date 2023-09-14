import telefoneValidation from "@/lib/telefoneValidation";
function mySqlAdjustment(input, maxcha, errorArray, functionError) {
  if (input.id != "Telefone" && input.id != "Celular") {
    if (input.value.length > maxcha) {
      errorArray.push("Campo grande demais");
      input.classList.add("error");
      input.placeholder = `${input.id} está grande demais`;
      input.style.Opacity = "0";
      functionError(`Campo ${input.id} excedeu número máximo de caracteres.`);
    } else if (
      (input.value.length < maxcha &&
        input.getAttribute("obrigatorio") == "true" &&
        input.value.length > 0) ||
      (input.value.length < maxcha &&
        input.getAttribute("obrigatorio") == "false" &&
        input.value.length == 0)
    ) {
      input.classList.remove("error");
      input.placeholder = input.id;
      errorArray.pop;
    }
  } else {
    if (input.value.length > 20) {
      errorArray.push("Campo grande demais");
      input.classList.add("error");
      functionError(`Campo ${input.id} excedeu número máximo de caracteres.`);
    } else if (input.value < 20 && telefoneValidation(input.value)) {
      input.classList.remove("error");
      input.placeholder = input.id;
      errorArray.pop;
    }
  }
}

export default mySqlAdjustment;
