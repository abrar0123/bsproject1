import React from 'react'

export default function spinner() {
  return (
    <div className='container'>
        <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div className="text-center" >
<div class="spinner-grow text-info" style={{width:'3rem',height:'3rem'}} role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>


    </div>
  )
}
