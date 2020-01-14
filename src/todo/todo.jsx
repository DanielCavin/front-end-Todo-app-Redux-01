import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForms'
import TodoList from './todoList'

export default props => (
  <div>
    <div>
      <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
      <TodoForm />
      <TodoList />
    </div>
  </div>
)
