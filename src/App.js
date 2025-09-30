import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useRef, useState, useReducer } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function reducer(state, action) {
  //action type에 따른 동작 switch문
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }

    case "UPGRADE": {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }

    case "DELETE": {
      return state.filter((item) => item.id !== action.targetId);
    }

    default:
      return state;
  }
}

function App() {
  const mockTodo = [
    {
      id: 0,
      isDone: false,
      content: "리액트 공부하기",
      creatDate: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "빨래 널기",
      creatDate: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "노래 연습하기",
      creatDate: new Date().getTime(),
    },
  ];

  //const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo); // 위에 mokTodo 없으면 빈배열 넣기

  const idRef = useRef(3); //초깃값이 3인 ref객체 생성하여 idRef에 저장

  function onCreate(content) {
    //추가 버튼이 클릭되면 실행될 이벤트 핸들러
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current, //idRef가 현재 저장하고 있는 값 불러옴
        content,
        isDone: false,
        creatDate: new Date().getTime(),
      },
    });

    idRef.current += 1; // newItem -> 할일 객체를 생성 후 idRef값을 증가
  }

  function onUpdate(targetId) {
    dispatch({
      type: "UPGRADE",
      targetId: targetId,
    });
  }

  function onDelete(targetId) {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
