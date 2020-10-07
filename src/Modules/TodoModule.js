/* 액션 선언 */
const ADD_TODO = "TODO/ADD_TODO";
const TOGGLE_TODO = "TODO/TOGGLE_TODO";
const DELETE_TODO = "TODO/DELETE_TODO";

/* 액션 생성함수 선언 */
export const addTodo = (text, id) => ({
  type: ADD_TODO,
  todo: {
    id,
    text,
    done: false,
    del: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  todo: {
    id,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  todo: {
    id,
  },
});

/* 초기 값 선언 */
const initialState = () => {
  const Item = localStorage.getItem("Todos");
  if (Item === null) {
    return [
      {
        id: 1,
        text: "오늘 이걸 할래",
        done: false,
        del: false,
      },
      {
        id: 2,
        text: "오늘 미완성",
        done: false,
        del: false,
      },
    ];
  } else {
    return JSON.parse(Item);
  }
};

/* 리듀서 작성 */
export default function todoReducer(state = initialState(), action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.todo.id ? { ...todo, done: !todo.done } : todo
      );
    case DELETE_TODO:
      return state.map((todo) =>
        todo.id === action.todo.id ? { ...todo, del: !todo.del } : todo
      );
    default:
      return state;
  }
}
