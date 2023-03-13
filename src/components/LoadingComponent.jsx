import React from 'react';


export default function LoadingComponent(){

    return(
        <div style={{marginLeft:'auto', marginRight:'auto', width:'40%'}}>
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>

        </div>
      
    )
}