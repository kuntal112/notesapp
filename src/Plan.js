import React from 'react'

function Plan(props) {
    return (
        <React.Fragment>
           <li className="card font-weight-bold m-1" style={{minHeight:"200px",backgroundColor:"#fff2444f",display:"flex",width:"200px",justifyContent:"space-between",padding:"10px",alignItems:"center"}}>
               {props.value}
           <button 
           className="btn btn-danger" 
           onClick={props.deleteHandler}>Delete</button>
           </li> 
        </React.Fragment>
    )
}

export default Plan
