import { useState } from "react"
import Login from "./login";

export default function Registration(){
    const [login] = useState(false);
    // setLogin
    const handleRegistration = ()=>{
        return(
            <div><h1>Registration</h1></div>
        )
    };

    return(
       <main>
        <div> {
            login ? <Login/>: <form onSubmit={handleRegistration} className="max-w-5xl mx-auto bg-red-400 pt-10 px-10 py-10 lg:px-0"> 
                <div className="border-b border-white/20 pb-5">
                    <h2 className="text-lg lowercase text-white font-thin leading-7 text-center">Registration</h2>
                    <p className="text-sm mt-1 leading-5 text-gray-600 font-thin">
                        You need to provide the required information to register with us.
                    </p>
                </div>
                <div className="border-b border-white/20 pb-5">
                    <div className="mt-5 grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                        <div>
                          <label htmlFor="">First Name</label>
                          <input type="text" 
                          name="firstName" 
                          title="firstName"
                          className="block  w-full rounded-md border-0 bg-white/5 py-1.5
                           text-white shadow-sm ring-1 outline-none ring-inset ring-white/10
                           focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 px-4"
                          
                          />
                        </div>
                    </div>
                </div>
            </form>
    }</div>
       </main>
    )
}


