import React from 'react'
import "./List.css"
import {FcEmptyTrash} from "react-icons/fc"
import {AiFillEdit} from  "react-icons/ai"

 const list = ({data,isDone,onChecked,id,onDelete,onEdit}) => {
    
    const HandleCheck = () =>{
      onChecked(id)
    }

    const HandleDelete= () =>{
      onDelete(id)
    }
    const HandleEdit= () =>{
      onEdit(id)
    }


  return (
    <div className={`listContainer ${isDone && `done`  }`}  >
        
        <div className="" style={{display:'flex'}}>
          <input type="checkbox" checked={isDone} onChange={HandleCheck} />
          <p>{data}</p>
        </div>
       
        <div className="btn-gp">
          <button onClick={HandleDelete}>
            <FcEmptyTrash className='icon'/>Delete
          </button>
          <button onClick={HandleEdit}>
            <AiFillEdit  className='icon'/> Edit
          </button>
        </div>
    </div>
  )
}

export default list