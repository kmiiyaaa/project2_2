import { useRef, useState } from "react";
import "./TodoEditor.css";

function TodoEditor({onCreate}) {

    const [content, setContent] = useState("");
    const inputRef = useRef();

    function onChangeContent(e) {
        setContent(e.target.value); //유저가 입력한 할일 텍스트
        //console.log(e.target.value);
    }

    function onSubmit() {
        if(!content) { //참이면 빈칸""으로 들어옴
            alert("할일은 반드시 내용이 필수입니다.");
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); //할일 입력창 초기화
    }

    function onKeyDown(e) {
        if(e.keyCode === 13) {//엔터키 코드->13->참이면 엔터키가 눌림
            onSubmit();
        } 
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                <input ref={inputRef} value={content} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;