import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from 'store/todo'
import TodoCard from './Card/Card'

function TodoList({ todoList, setTodoList }) {
	const dispatch = useDispatch()

	const handleUpdateTodo = (id, content, state) => {
		dispatch(updateTodo({ id, content, state }))
		/** action.payload = {
		 *    id,
		 *    content,
		 *    state
		 * } */
	}

	const onDeleteTodo = id => {
		if (window.confirm('정말 삭제하시겠습니까')) {
			dispatch(deleteTodo(id))
			/** action.payload = id */
		}
	}

	console.log(todoList)

	return (
		<div>
			{/* {TODO_LIST.map((todo) => (<TodoCard />))} */}
			{todoList.map(todo => {
				return (
					<TodoCard
						key={todo.id}
						todo={todo}
						example={'test'}
						handleEdit={handleUpdateTodo}
						onDelete={onDeleteTodo}
					/>
				)
			})}
			{/**
			 * 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
			 * props(속성)을/를 이용하여 데이터를 전달
			 */}
		</div>
	)
}
export default TodoList
