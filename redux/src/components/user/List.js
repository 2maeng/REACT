import { useSelector } from 'react-redux';

const UserList = () => {
  const userList = useSelector((state) => state.user);

  return (
    <>
      {userList.map((user, index) => (
        <div key={user.id}>
          {index + 1}. {user.name}
        </div>
      ))}
    </>
  );
};
export default UserList;
