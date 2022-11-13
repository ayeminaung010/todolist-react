import {useRef} from 'react'
import "./Form.css";
import {HiDocumentAdd} from "react-icons/hi"

const Form = ({onSubmit}) => {
    const inputRef = useRef();

    const HandleCLick = (e) =>{
        e.preventDefault();
        if(inputRef.current.value){
          onSubmit(inputRef.current.value)
        }
        inputRef.current.value = "";
    }

  return (
    <div>
        <form className="formContainer" >
            <input type="text"  ref={inputRef} />
            <button  onClick={HandleCLick}>
              <HiDocumentAdd className='icon'/>Add
            </button>
          </form>
    </div>
  )
}

export default Form