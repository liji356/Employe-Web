import React, { useState } from 'react'

const Search = () => {
    var[id,setid]=useState("")


    const newSearch=()=>{
        const data={"id":id}
        console.log(data)

    }

    
  return (
    <div>


<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employee Id</label>
                    <input onChange={(y)=>{setid(y.target.value)}} type="text" className="form-control"/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={newSearch} className='btn btn-success'>SEARCH</button>
                </div>
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Search