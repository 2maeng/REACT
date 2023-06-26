import { createContext, useContext, useReducer, useState } from 'react';
import { createAction } from '../utils/createAction';

const initialState = [
  {
    id: 1,
    name: '김임형',
  },
  {
    id: 2,
    name: '구현서',
  },
  {
    id: 3,
    name: '김태기',
  },
  {
    id: 4,
    name: '김민식',
  },
];

export const UserContext = createContext();
export const UserDispatchContext = createContext();
// 전역 저장소를 만들겠다

export const useUserState = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext);

export const ADD_STATE = createAction('ADD_STATE');
/**
 * ADD_STATE({id, name})
 */
export const REMOVE_STATE = createAction('REMOVE_STATE');

// reducer
const userListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STATE':
      return [...state, { id: action.payload.id, name: action.payload.name }];
    case 'REMOVE_STATE':
      return state.filter((user) => user.id !== action.payload.id);
    default:
      return;
  }
};

const ContextProvider = ({ children }) => {
  //   const [state, setState] = useState(initialState);
  const [state, dispatch] = useReducer(userListReducer, initialState);

  return (
    <UserContext.Provider value={state}>
      {/* {value={[state, dispatch || setState]}}/// */}
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default ContextProvider;

/**
 * 2달 => 16회
 *
 * 1. reducertodo
 * 2. reduxtodo
 * 3. axiostodo, (백엔드, api문서
 * 4. reduxsagatodo
 * 5. reduxtoolkittodo
 *
 * 6. dbms
 * 7. node 기본
 * 8. node 기본
 * 9. login, signup
 * 10. todoList
 * 11. chating, socket
 *
 * 12. recoiltodo
 * 13. openApi 영화트레일러 만들기 -> 배포
 * 14. typescript 기본
 * 15. typescript 기본
 * 16. typetodo
 *
 * 17. testcode
 * 18. tddtodo
 */
