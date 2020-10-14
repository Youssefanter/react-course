import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Registry(){
    const [RegistryData,setRegistryData]=useState([])
    const[TextInput,setTextInput]=useState("")
    const[Error,setError]=useState(false)
    const addItem=(e)=>{
        if(Error)return;
        e.preventDefault();

        const tempData=[...RegistryData];
        tempData.push(TextInput)
        setRegistryData(tempData)
        setTextInput("")
    }
    console.log(RegistryData)
    useEffect(()=>{
        if(TextInput.length>10) setError(true);
        else setError(false); 
    },[TextInput])

    const removeItem=(index)=>{
        let newData=[...RegistryData]
        newData.splice(index,1) 
        setRegistryData(newData)
    }


    const EditItem=(index)=>{
        if (Error) {
            return;
        }
        let newData=[...RegistryData]
        newData[index]=TextInput
        setRegistryData(newData)
    }

    return(
        <div>
            <h1>Registry</h1>
            <Link to="/">Click here to go to Home page</Link>
            <form onSubmit={addItem}>
                <label>Text input :
                    <input type="text" value={TextInput} onChange={(e)=>setTextInput(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            {Error ? <span style={{color:"red"}}>Error occurred.</span>:null}
            {
                RegistryData.map((item,index)=>{
                    return(
                        <li key={index}>{item} 
                        <button
                         type="button" className="btn btn-primary" onClick={()=>removeItem(index)}>Remove
                        </button>
                        <button 
                        type="button" className="btn btn-secondary" onClick={()=>EditItem(index)}>Update
                        </button>
                        </li>
                        
                    )
                })
            }
        </div>
    )
}
export default Registry;