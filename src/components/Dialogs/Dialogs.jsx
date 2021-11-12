import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
    console.log(props);
   
    let dialogsElements = props.state.dialogs.map((dialog)=><DialogItem name ={dialog.name} id={dialog.id}/>)
    
    let messagesElements = props.state.messages.map((m)=><Message  message={m.message}/>)
    // console.log(dialogsElements);
    // console.log(messagesElements);
    return(
        <div className={s.dialogs}>
            <div className = {s.dialogsItems}> 
              {dialogsElements}
                
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
  
}
export default Dialogs