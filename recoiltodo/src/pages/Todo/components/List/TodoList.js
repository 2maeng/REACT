import TodoApi from 'apis/todoApi';
import { Suspense } from 'react';
import TodoCard from './Card/Card';
import useGetTodo from 'hooks/queries/todo/get-todo';
import useUpdateTodo from 'hooks/queries/todo/update-todo';

function TodoList() {
  const { data: todoList, status, isLoading } = useGetTodo();
  const updateTodo = useUpdateTodo();

  const handleUpdateTodo = async (id, content, state) => {
    updateTodo.mutate({
      id,
      data: {
        content,
        state,
      },
    });
  };

  // const onDeleteTodo = async (id) => {
  //   if (window.confirm('정말 삭제하시겠습니까')) {
  //     const { data } = await TodoApi.deleteTodo(id);
  //     setTodoList(todoList.filter((todo) => todo.id !== data.data));
  //   }
  // };

  if (!todoList) return null;
  return (
    <div>
      {/* {TODO_LIST.map((todo) => (<TodoCard />))} */}
      {todoList &&
        todoList.data.data.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              todo={todo}
              example={'test'}
              handleEdit={handleUpdateTodo}
              // onDelete={onDeleteTodo}
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
