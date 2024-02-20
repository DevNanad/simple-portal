import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { register } from "../../services/api/auth";
import Form from "../../components/Form";
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleFullnameChange = (e) => {
        setFullname(e.target.value)
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleShowPasswordChange = (e) => {
        setShowPassword(!showPassword)
    }
    const handleRegister = async (e) => {
        e.preventDefault()

        const res = await register(fullname, username, password)

        if(res.data.message === 'success') {
            setFullname('')
            setUsername('')
            setPassword('')
            setConfirmPassword('')
            navigate('/login', { replace: true })
        } else {
            alert('Registration failed')
        }
        
    }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <Form formName="Register">
            <Input labelName="Fullname" value={fullname} onChange={handleFullnameChange} type="text" />
            <Input labelName="Username" value={username} onChange={handleUsernameChange} type="text" />
            <Input labelName="Password" value={password} onChange={handlePasswordChange} type={showPassword ? "text" : "password"} />
            <Input labelName="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} type={showPassword ? "text" : "password"} />
            <div className="">
                <input type="checkbox" onChange={handleShowPasswordChange} className="mr-2" />
                <label className={`text-sm ${showPassword ? "opacity-90" : "opacity-70"}`}>Show Password</label>
            </div>
            <Button type="submit" buttonName="Register" onClick={handleRegister} />
            <div className="flex text-sm justify-center mt-2">
                <p>Already have an account? <Link to="/login" className="text-violet-500 py-2 text-base">Login</Link></p>
            </div>
        </Form>
    </div>
  )
}
