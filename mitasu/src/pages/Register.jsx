import axios from "axios"
import { useState } from "react"


function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit() {

    }
    return (
        <>
            <div className="h-screen bg-sky-100 flex justify-center items-center">
                <div className="border h-1/2 w-1/4 bg-emerald-50 rounded-md">
                    <h2 className="m-10 text-center text-3xl">Register</h2>
                    <form className="flex flex-col justify-center items-center w-full" onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center items-center w-full m-5">
                            <label className="text-2xl pb-3">Email</label>
                                <input className="border w-3/4 bg-white rounded-md" type="text" onChange={(e) => setEmail(e.target.value)} /> 
                            <label className="text-2xl p-3">Password</label>
                                <input className="border w-3/4 bg-white rounded-md" type="password" onChange={(e) => setPassword(e.target.value)} /> 
                        </div>
                        <button className="border m-5 rounded-md bg-neutral-200 hover:bg-neutral-400">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register