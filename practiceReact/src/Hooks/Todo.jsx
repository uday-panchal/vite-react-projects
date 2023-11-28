import React, {memo} from "react";

const Todos = ({todos, addTodo}) => {
    console.log('Todo components called!!')
    return(
        <div>
            <div>Add Todo</div>
            {
                todos.map((item, index) => <p key={index}>{item} {" "} {index}</p>)
            }
             <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={addTodo}>Add Todo</button>

        </div>
    )
}

export default memo(Todos)