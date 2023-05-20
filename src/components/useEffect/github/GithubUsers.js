import React from 'react'
import { FcApproval } from "react-icons/fc";

const GithubUsers = ({users}) => {
  return (
    <>
      <h1 className='begin2'>List of GitHub Users</h1>
            <div className='container-fluid mt-5'>
                <div className="row text-center">

                {
                    users.map((curElem)=>{
                        const {id, thumbnailUrl, title} = curElem;
                        return(
                                <div className="col-10 col-md-4 mt-5" key={id}>
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="image"> <img src={thumbnailUrl} alt="" className="rounded" width="155" /> </div>
                                <div className="ml-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft">{title} <FcApproval/></h4> <span className="textLeft"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }

                    
                </div>
            </div>
            </>
  )
}

export default GithubUsers
