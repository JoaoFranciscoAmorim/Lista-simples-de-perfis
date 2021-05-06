import React from 'react';
import Card from "./Card";
import classes from './UsersList.module.css';
function UsersList(props) {
    return (
        <Card className={classes.users}>
        <ul>
            {props.users.map((user) => (<li key={user.id}>{user.name} ({user.age} anos de idade)</li>))}
        </ul>
        </Card>
    )
}
export default UsersList;
/*-Este arquivo, ou seja, este componente, é responsável pelo output dos dados do usuário, ou seja, onde os dados que o usuário colocará ficarão armazenados.
-{props.users.map()} está criando uma propriedade (props) chamada users, que guardará uma lista de dados do usuário. O map transforma os dados da lista em elementos JSX. Cada dado do usuário, ou seja, cada elemento da lista, terá uma propriedade "name" e uma propriedade "age".
-Card é uma tag personalizada para "embrulhar" alguma outra tag e colocar algum estilo nesta.
-A função UsersList, responsável pelo output, será colocada no App.js.*/