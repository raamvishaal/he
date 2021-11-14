import React from 'react';
import User from './User';
const Users=({items,query})=>{
    return(
        <section>
            {items.filter((val)=>{
                if(query===""){
                    return val;
                }
                else if(val.name.toLowerCase().includes(query.toLowerCase())){
                    return val;
                }
            }).map((item)=>(
                <User key={item.id} item={item}></User>
            ))}
        </section>
    )
}
export default Users;