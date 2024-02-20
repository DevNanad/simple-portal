import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { login } from "../../services/api/auth";
import Form from "../../components/Form";
import { useNavigate } from "react-router-dom"
import { usersStore } from "../../store/store";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const {addUserId} = usersStore((state) => state)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleShowPasswordChange = (e) => {
        setShowPassword(!showPassword)
    }
    const handleLogin = async (e) => {
        e.preventDefault()

        const res = await login(username, password)

        if(res.data.message === 'success') {
            //navigate user to dashboard
            if(res.data.role === 'admin'){
                console.log(res.data.userId)
                addUserId(res.data.userId)
                navigate('/admin', {replace: true})
            }else{
                addUserId(res.data.id)
                navigate('/user', {replace: true})
            }
        } else {
            console.log(res.data.error);
        }
        
    }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <Form formName="Login">
            <Input labelName="Username" value={username} onChange={handleUsernameChange} type="text" />
            <Input labelName="Password" value={password} onChange={handlePasswordChange} type={showPassword ? "text" : "password"} />
            <div className="">
                <input type="checkbox" onChange={handleShowPasswordChange} className="mr-2" />
                <label className={`text-sm ${showPassword ? "opacity-90" : "opacity-70"}`}>Show Password</label>
            </div>
            <Button type="submit" buttonName="Login" onClick={handleLogin} />
            <div className="flex text-sm justify-center mt-2">
                <p>Don't have an account? <Link to="/" className="text-violet-500 py-2 text-base">Register</Link></p>
            </div>
        </Form>
    </div>
  )
}
