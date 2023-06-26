const initialState = [
  {
    id: 1,
    name: '김성용',
    // age:20,
    // height:190,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default reducer;
