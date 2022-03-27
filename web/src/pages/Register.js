import { useState } from "react";
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false
}

const Register = () => {
    const [values, setValues] = useState(initialState);

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    return (
        <section className="full-page">
            <form className="form">
                <Logo />

                {
                    values.isMember ? 
                    <p> Don't have account?
                        <button type="button" onClick={toggleMember}>Register</button>
                    </p>
                    :
                    <p>Already have account?
                        <button type="button" onClick={toggleMember}>Sign in</button>
                    </p>
                }
            </form>
        </section >
    )
}

export default Register;