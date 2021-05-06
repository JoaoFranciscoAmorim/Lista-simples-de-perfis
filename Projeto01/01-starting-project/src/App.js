import React, { useState } from 'react';
import AddUser from './Components/AddUser'
import UsersList from './Components/UsersList';

function App() {
  const [usersList, setUsersList] = useState ([]);
  function addUserHandler (uName, uAge) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()},]
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
/*-Rodar npm install instala as dependências, como a biblioteca React.
-o AddUser, dentro da função App, chama a função AddUser, que foi importada.
-O UsersList chama a função UsersList, que é responsável pelo output dos dados.
-A função UsersList dá o output através de uma lista, portanto o useState cria uma lista vazia com [].
-onAddUser serve para chamar a função addUserHandler quando o usuário clicar no "Adicionar Usuário".*/