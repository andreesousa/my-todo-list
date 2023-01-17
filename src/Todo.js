import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm"
import List from "./components/List";
import Item from "./components/Item";
import './Todo.css'
import Modal from "./components/Modal";
import { FiPaperclip } from "react-icons/fi";

const SAVED_ITEMS = "savedItems"

function Todo() {

   const [showModal,setShowModal] = useState(false)
   const [items, setItems] = useState([]);

   // tentar entender o erro, não salva no localStorage e também não aparece nenhum erro no console.
   useEffect(() => {
      let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
      if(savedItems) {
         setItems(savedItems)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
   },[items])

   function onAddItem(text){
      let it = new Item(text);
      setItems([...items, it]);
      onHideModal();
   }

   function onItemDeleted(item){
      let filteredItems = items.filter(it => it.id !== item.id);
      setItems(filteredItems);
   }

   function onDone(item){
      let updateItems = items.map( it =>{
         if(it.id === item.id){
            it.done = !it.done;
         }
         return it;
      })

      setItems(updateItems);
   }

   function onHideModal(){
      setShowModal(false)
   }

   return(
      <div className="container">
         <header className="header">
            <h1>To-do List</h1>
            <button className="add-button" onClick={()=>{setShowModal(true)}}>
               <FiPaperclip/>
            </button>
         </header>
         
         <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}/>
         <Modal show={showModal} onHideModal={onHideModal}>
            <TodoForm onAddItem={onAddItem}/>
         </Modal>
      </div>
   )
}



export default Todo;