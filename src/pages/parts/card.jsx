import React from "react";
export default function Card (){

    return(
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
         <div class="card shadow-sm">
        <img src="vimeo.png" alt="" style={{width : "100px"} } />
        <div class="card-body">
       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <div class="d-flex justify-content-between align-items-center">
           <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
         <small class="text-muted">9 mins</small>
       </div>
        </div>
        </div>
        </div>
        </div>
    )
}