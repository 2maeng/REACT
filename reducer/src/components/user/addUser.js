import { useState } from 'react';

function AddUser() {
  const [userName, setUserName] = useState();
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onClickAddUserBtn = (onAddUser) => {
    onAddUser(userName);
    setUserName('');
  }

  return (
    <form>
      <input value={userName} onChange={onChangeUserName} />
      <button onClick={onClickAddUserBtn}>추가</button>
    </form>
  );
}
export default AddUser;
