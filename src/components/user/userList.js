import { useUserState } from '../../context/user';

function UserList({ onDeleteUser }) {
  const userList = useUserState();

  return userList.map((user, index) => (
    <div key={index}>
      {user.id}. {user.name}
      <button onClick={() => onDeleteUser(user.id)}>삭제</button>
    </div>
  ));
}

export default UserList;
