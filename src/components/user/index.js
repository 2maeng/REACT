import { useState } from 'react';
import { ADD_STATE, REMOVE_STATE, useUserDispatch, useUserState } from '../../context/user';
import AddUser from './addUser';
import UserList from './userList';

function User() {
  const userList = useUserState();
  const dispatch = useUserDispatch();

  // 내가 만든 context 사용하겠다
  // 그 context의 value? = [state, setState]

  // const [userList, setUserList] = useState([
  // {
  //   id: 1,
  //   name: '김임형',
  // },
  // {
  //   id: 2,
  //   name: '구현서',
  // },
  // {
  //   id: 3,
  //   name: '김태기',
  // },
  // {
  //   id: 4,
  //   name: '김민식',
  // },
  // ]);

  /**
   * 실습 (10분~15분)
   * 삭제 버튼을 누르면 해당 유저는 삭제되고
   * 추가 버튼을 누르면 최하단에 유저가 추가된다
   */

  const onDeleteUser = (id) => {
    dispatch(REMOVE_STATE({ id }));
  };

  const onAddUser = (name) => {
    const id = userList[userList.length - 1].id + 1;
    dispatch(ADD_STATE({ id, name }));
  };

  return (
    <>
      <UserList onDeleteUser={onDeleteUser} />
      <AddUser onAddUser={onAddUser} />
    </>
  );
}

export default User;

/**
 *
 */
