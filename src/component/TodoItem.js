import "./TodoItem.css"

function TodoItem({id, content, isDone, createDate, onUpdate, onDelete}) {

    function onChangeCheckbox() {
        onUpdate(id);
    }

    function onClickDelete() {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" onChange={onChangeCheckbox} checked={isDone} />
            </div>
            <div className="title_col">{isDone === false ? content:content + " 완료!"}</div>
            <div className="date_col">{new Date().toDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>        
    );
}

export default TodoItem;