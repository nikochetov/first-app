import React from 'react';

function AddTodo() {
  return (
    <form>
        <input style={{ marginBottom: '1rem', marginRight: '1rem' }} />
        <button type='submit'>Add todo</button>
    </form>
  )
}

export default AddTodo;