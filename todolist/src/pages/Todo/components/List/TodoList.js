import TodoCard from './Card/Card';

function TodoList(){

    const TODO_LIST = [
        {
            id: 1,
            title: 'example1',
            content: 'content1',
            state: false,
            edit: false,
        },
        {
            id: 2,
            title: 'example2',
            content: 'content2',
            state: false,
            edit: false,
        },
        {
            id: 3,
            title: 'example3',
            content: 'content3',
            state: false,
            edit: false,
        },
        {
            id: 4,
            title: 'example4',
            content: 'content4',
            state: false,
            edit: false,
        },
    ];

    return (
        <div>
            {/* {TODO_LIST.map((todo) => (<TodoCard />))} */}
            {TODO_LIST.map((todo) => {
                console.log(todo);
                return <TodoCard todo={todo} example={'test'} />;
            })}
        </div>
    );
}
export default TodoList;