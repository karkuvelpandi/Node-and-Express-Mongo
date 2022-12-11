import React, { useEffect, useState } from 'react'


const System = () => {
let [Platform,setPlatform]=useState({
    os:"",
    plat:"",
    browser:{}
})

let getDate=(event)=>{
  console.log(event)
  setPlatform({...Platform,plat:event.view.clientInformation.platform,os:event.view.clientInformation.userAgentData.platform,browser:event.view.clientInformation.userAgentData.brands[0]}) 
}
   
return <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <center><h1>Machine Info</h1></center>
                    </div>
                    <div className="card-body bg-info"><ul className='list-group'>
                    <li className='list-group-item text-strong' ><strong>Os Name :</strong> {Platform.os}</li>
                    <li className='list-group-item'><strong>Platform Name :</strong>{Platform.plat}</li>
                    <li className='list-group-item'><strong>Browser Name :</strong>{Platform.browser.brand}</li>
                    <li className='list-group-item'><strong>Browser version :</strong>{Platform.browser.version}</li>
                    </ul>
                    <button onClick={getDate} className="btn btn-dark mt-2">Click to fetch</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default System




