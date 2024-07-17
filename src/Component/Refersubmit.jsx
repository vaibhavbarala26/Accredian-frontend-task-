import React, { useContext, useState } from 'react'
import { AuthContext } from './Context/Context'
import { generate } from "referral-codes"
import img from "../assets/hero.png"
import axios from "axios"
const Refersubmit = () => {
    const { handlers, currentUser } = useContext(AuthContext)
    const [referralcode, setreferralcode] = useState("")
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [refreemail, setRefreemail] = useState("")
    const [errors, setErrors] = useState([])
    const handle = () => {
        handlers();
        console.log(currentUser);
    }
    const handles = () => {
        const l = generate({
            prefix: "ACC-",
            postfix: "2024"
        })
        console.log(l);
        setreferralcode(l[0]);
    }
    
    
    const handlesubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target)
        const { name, email, refreemail } = Object.fromEntries(formdata)
        console.log(refreemail);
        try {
            const res = await axios.post("http://localhost:1042/referral", {
                name, email, refreemail, referralcode
            })
            const red = await axios.post("http://localhost:1042/referral/send ", {
                name, email, refreemail, referralcode
            })
            console.log(res.data);
            console.log(red.data);
        }
        catch (e) {
            setErrors(e.response?.data)
            console.log(errors);
        }
    }
    var error;
    if(errors){
        console.log(errors);
     error = Object.values(errors)
    console.log(error);
    }
    return (
        <div className='h-full bg-sky-500 flex items-center flex-col text-white xs:text-center '>
            <div className='w-full flex flex-row justify-end px-10 pt-10 cursor-pointer' onClick={handlers}>Close</div>

            <img src={img} alt="" className='h-60' />
            <div>
                { error && error[0]?.length > 1 && error[0]?.map((r)=>
                    (<div className='flex flex-col'>{r.path} - {r.msg}</div>)
                    )}
            </div>
            <span className=' text-3xl font-bold'>Refer your Friend and Earn</span>
            <button onClick={handles} className='bg-white px-3 py-3 my-3 font-bold text-sky-500 '>Generate Referal Code</button>
            <form action="" className=" flex flex-col gap-10 py-8" onSubmit={handlesubmit}>
                <div className='flex justify-around items-center gap-6'>
                    <span className='pr-12 font-bold'>Email</span>
                    <input type="text" name='email' placeholder='email' className='px-2 py-2 text-black' />
                </div>
                <div className='flex justify-around items-center gap-6'>
                    <span className='pr-12 font-bold'>Name</span>
                    <input type="text" placeholder='name' name="name" className='px-2 py-2 text-black' />
                </div>
                <div className='flex justify-around items-center gap-6'>
                    <span className='font-bold'>Refree's email</span>
                    <input type="text" placeholder="referer's email" name='refreemail' className='px-2 py-2 text-black' />
                </div>
                <div className="div flex gap-3 justify-center">
                <button className='bg-sky-600 px-3 py-3 my-3 font-bold'>Save Details</button>
                
                </div>
            </form>
          
            
        </div>
    )
}

export default Refersubmit
