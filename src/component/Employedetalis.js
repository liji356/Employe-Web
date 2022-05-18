import React, { useState } from 'react'
import Header from './Header'

const Employedetalis = () => {

    var[id,setId]=useState("")
    var[name,setName]=useState("")
    var[desgination,setDesignation]=useState("")
    var[Salary,setSalary]=useState("")
    var[companyname,setCompany]=useState("")
    var[dob,setDob]=useState("")
    var[Email,setEmail]=useState("")



    const newEmployee=()=>{
        const data={"id":id,"name":name,"desgination":desgination,"Salary":Salary,"companyname":companyname,"dob":dob,"Email":Email}
        console.log(data)
    }
    

    

  return (
    <div>

        <Header/>


<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Employee Id</label>
                    <input onChange={(x)=>{setId(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(x)=>{setName(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Designation</label>
                    <input onChange={(x)=>{setDesignation(x.target.value)}} type="text" class="form-control"/>
                    
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Salary</label>
                    <input onChange={(x)=>{setSalary(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Company Name</label>
                    <input onChange={(x)=>{setCompany(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">DOB</label>
                    <input onChange={(x)=>{setDob(x.target.value)}} type="date" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Email</label>
                    <input onChange={(x)=>{setEmail(x.target.value)}} type="email" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button class="btn btn-success">CLEAR</button>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={newEmployee} class="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Employedetalis