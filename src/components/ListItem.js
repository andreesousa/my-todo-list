import React from "react"
import Card from "./Card"
import { FiTrash2, FiCircle, FiCheckCircle } from 'react-icons/fi'



function DoneCheck(props) {
   if (props.done) {
      return (<FiCheckCircle className="done-check" />)
   } else {
      return (<FiCircle />)
   }
}

function ListItem(props) {

   return (

      <li>
         <Card className={props.item.done ? "done item" : "item"}>
            {props.item.text}
            <div>
               <button onClick={() => { props.onDone(props.item) }}>
                  <DoneCheck done={props.item.done}></DoneCheck>
               </button>
               <button onClick={() => { props.onItemDeleted(props.item) }}>
                  <FiTrash2 />
               </button>
            </div>
         </Card>
      </li>
   )
}

export default ListItem;