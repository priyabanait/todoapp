import React, { useState } from 'react'

export default function ToDoList() {
    const [enterActivity , setEnterActivity]=useState('');
    const[listData, setListData]=useState([]);

    function onActivityhandler(event){
        setEnterActivity(event.target.value)
    }
    function listHandler(){
        setListData((listData)=>{
  const list=[...listData,enterActivity];
  setListData(list)
  return list;
 
        })
       setEnterActivity('')  
    }
   
        
    
    function RemoveData(i){
       const list=listData.filter((elem, id)=>{
        return i!==id;
       })
       setListData(list)
    }
    function removeAll(){
        setListData([])
    }
  return (
    <div>
      <div className='container'>
        <div className='input header'>
            <h2>ToDo List</h2>
        <input type='text' placeholder='Enter Activity' onChange={onActivityhandler} 
        value={enterActivity}></input>
        <button className='button' onClick={listHandler}>Add</button>
        </div>
        { listData.map((data, index)=>{
            return(
                <ul key={index} >
                    <li className='li'>
                   
                    <input type='checkbox' className='check'></input>
                        <p className='listData'>{data}</p>
                        <button className='btn-position' onClick={()=>RemoveData(index)}>Remove</button>
                   </li>
                </ul>
            )
        })}

      {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </div>
  )
}
