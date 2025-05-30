import { render, screen, fireEvent } from '@testing-library/react'
import ToDoList from '../components/ToDoList/ListaTarefas'
import React from 'react'

describe('ToDoList', () => {
  test(' renderiza input e botão corretamente', () => {
    render(<ToDoList />)
    const input = screen.getByPlaceholderText('Nova tarefa')
    const button = screen.getByText('Adicionar')
    
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('adiciona tarefa à lista', () => {
    render(<ToDoList />)
    const input = screen.getByPlaceholderText('Nova tarefa')
    const button = screen.getByText('Adicionar')

    fireEvent.change(input, { target: { value: 'Estudar React' } })
    fireEvent.click(button)

    const item = screen.getByText('Estudar React')
    expect(item).toBeInTheDocument()
  })
})
