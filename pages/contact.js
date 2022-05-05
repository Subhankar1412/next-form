import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
function Validate() {
 const {register,handleSubmit,formState:{errors}}=useForm(); console.log(errors);


    const [fnameerr, setfnameerr] = useState("");
    const [lnameerr, setlnameerr] = useState("");
    const [eerr, seteerr] = useState("");
    const [cerr, setcerr] = useState("");



 let onHandleSubmit = async(e)=>{
    e.preventDefault();
    var namecheck=/^[a-zA-Z]+$/;
    var lnamecheck=/^[a-zA-Z]+$/;
    if (e.target.firstname.value==="") {
        setfnameerr("yo can't leave it blank");
        return false;
    }
    else{
        if (namecheck.test( e.target.firstname.value ))
        {
            if (/^\s+$/.test(e.target.firstname.value)) {
                setfnameerr("yo can't enter last name hare");
                return false;
            }
        }else{
            setfnameerr("enter a valid name");
                return false;
        }
        setfnameerr("");
    }

    if (e.target.lastname.value==="") {
        setlnameerr("yo can't leave it blank");
        return false;
    }
    else{
        if (lnamecheck.test( e.target.lastname.value ))
        {
            if (/^\s+$/.test(e.target.lastname.value)) {
                setlnameerr("yo can't enter firstname hare");
                return false;
            }
        }else{
            setlnameerr("enter a valid last name");
                return false;
        }
        setlnameerr("");
    }

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (e.target.email.value==="") {
        seteerr("yo can't leave it blank");
        return false;
    }
    else{
        if(!regex.test(e.target.email.value))
        {
            var regex_sec=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if(!regex_sec.test(e.target.email.value))
            {
            seteerr("invalid email")
            return false;
            }
        }
        seteerr("");
    }

    var cno=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (e.target.contact.value==="") {
        setcerr("yo can't leave it blank");
        return false;
    }
    else{
        if(!cno.test(e.target.contact.value))
        {
            setcerr("invalid contact no")
            return false;
            
        }
        setcerr("");
    }



     const res = await fetch("/api/data",{
        body: JSON.stringify({
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            contact: e.target.contact.value
        }),
        headers: {
            'content-Type' : 'application/json'
        },
        method: 'POST'
    })
    const result = await res.json();
    if(result.success===true){
        setResponse("Success ");
        setData(result.successMessage);
    } else {
        setData(result.errorMessage);
        setResponse("error");
    }
}
const [data, setData] = useState(null);
const [response, setResponse] = useState(null);
    return (
        <div className='row mt-5  shadow p-4 mb-5 bg-white rounded'>
            <div>
                <form onSubmit={onHandleSubmit }>
                    <div className="row mb-3">
                        <label htmlFor="firstname" className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name='firstname' id="firstname"/>
                            <span className='text-danger'>{fnameerr}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10" >
                            <input type="text" className="form-control" name='lastname' id="lastname" />
                             <span className='text-danger'>{lnameerr}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input  type="text"  className="form-control" id="email" name='email' />
                            <span className='text-danger'>{eerr}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="contact" className="col-sm-2 col-form-label">Contact No.</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name='contact' id="contact" />
                            <span className='text-danger'>{cerr}</span>
                        </div>
                    </div>
                    <button type="submit"   className="btn btn-success button-design" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Validate
