import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState()
  function addUserHandler(event) {
    event.preventDefault();
    if (enteredUsername.trim().length===0 || enteredAge.trim().length===0) {
      setError({
        title: 'Dados inválidos',
        message: 'Por favor preencha os dados de forma correta'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Idade inválida',
        message: 'Por favor preencha os dados de forma correta'
      })
      return;
    }//o + no enteredAge converte o input para número, pois todo input, mesmo sendo type=number, é tratado como string

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge(""); //isto reseta o campo após a validação do usuário, combinado com o value={enteredUsername} e value={enteredAge}, nos inputs
  }
  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }
  function errorHandler() {
    setError(null);
  };
  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Nome do Usuário</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Idade (anos)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Adicionar Usuário</Button>
      </form>
    </Card>
    </div>
  );
}
export default AddUser;
/*-Primeiramente, a função AddUser colocará o componente para o usuário preencher.
-htmlFor é como a class, para tags de html.
-Depois que colocar os inputs e botões, o onSubmit (que é uma prop) no formulário especificará uma função (addUserHandler) que será executada quando o formulário for enviado pelo usuário.
-O preventDefault impede que a página seja recarregada e volte para o estado padrão.
-Button, com B maiusculo, chamará a função Button, criada no outro arquivo e importada aqui, para ter um botão personalizado.
-useState sempre retorna uma lista com exatamente dois elementos, o primeiro guarda o que o usuário colocou e o segundo guarda a função para mexer com tal variável.
-Após tal input ser preenchido, a função usernameChangeHandler pegará o valor. A mesma coisa para o outro input, ou seja, a idade.*/
