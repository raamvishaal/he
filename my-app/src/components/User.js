import React from 'react';
const User=({item})=>{
    return (
        <div className="item">
        <div className="itemd">
        <img src={item.Image} alt=''/>
        </div>
        <div className="itemd" style={{marginTop:"10%"}}>
        <p className="itemd">User Name</p>
        <p className="itemd bb">{item.name}</p>
        <p className="itemd">User Id</p>
        <p className="itemd">{item.id}</p>
        </div>
    </div>
    )
}
export default User;