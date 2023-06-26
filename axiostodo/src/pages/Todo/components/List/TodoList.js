import TodoApi from 'apis/todoApi';
import { Suspense } from 'react';
import TodoCard from './Card/Card';

function TodoList({ todoList, setTodoList }) {
  const handleUpdateTodo = async (id, content, state) => {
    try {
      const { data } = await TodoApi.updateTodo(id, { content, state });
      const newTodoList = [...todoList];
      const index = newTodoList.findIndex((todo) => todo.id === data.data.id);
      newTodoList[index] = data.data;
      setTodoList(newTodoList);
    } catch (err) {
      console.log(err);
    }
  };

  const onDeleteTodo = async (id) => {
    if (window.confirm('정말 삭제하시겠습니까')) {
      const { data } = await TodoApi.deleteTodo(id);
      setTodoList(todoList.filter((todo) => todo.id !== data.data));
    }
  };

  return (
    <div>
      {/* {TODO_LIST.map((todo) => (<TodoCard />))} */}
      {todoList &&
        todoList.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              todo={todo}
              example={'test'}
              handleEdit={handleUpdateTodo}
              onDelete={onDeleteTodo}
            />
          );
        })}
      {/**
       * 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
       * props(속성)을/를 이용하여 데이터를 전달
       */}
    </div>
  );
}
export default TodoList;
