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

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
        const x = values;
        console.log(x);
    }

    return (
        <section className="full-page">
            <form className="form">
                <Logo />

                {
                    !values.isMember && 
                    <FormRow 
                    type='text'
                    name='name'
                    labelText='name'
                    value={values.name}
                    handleChange={handleChange}
                />
                }

                <FormRow 
                    type='email'
                    name='email'
                    labelText='email'
                    handleChange={handleChange}
                    value={values.email}
                />

                <FormRow 
                    type='password'
                    name='password'
                    labelText='password'
                    value={values.password}
                    handleChange={handleChange}
                />
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