import { useState } from "react";

import { useAppContext } from "../context/appContext";
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";
import mainWrapper from '../assets/wrappers/mainWrapper';
import mainApi from "../services/mainAPI";

const initialState = {
  name: '',
  email: '',
  password: '',
  phoneNumber: '',
  isMember: false
}


const Register = () => {
    const [values, setValues] = useState(initialState);
    const [token, setToken] = useState('')

    const { displayAlert, isLoading, showAlert } = useAppContext();

    const toggleMember = async() => {
        setValues({...values, isMember: !values.isMember})
        /*const res = await mainApi.get('/');
        console.log(res)*/
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const register = async() => {
        if (values.name.length == 0 || values.name == '') {
            displayAlert();
            console.log("Name invalid")
            return
        }
        /*if (values.phoneNumber.length == 0 || values.phoneNumber == '' || values.phoneNumber == ' ') {
            displayAlert();
            console.log(values)
            console.log("Phone invalid")
            return
        }*/
        if (values.email.length == 0 || values.email == '' || values.email == ' ') {
            displayAlert();
            console.log("Email invalid")
            return
        }
        if (values.password.length == 0 || values.password.length < 8 || values.password == '' || values.password == ' ') {
            displayAlert();
            console.log("Password invalid")
            return
        }
        console.log(10)
        const res = await mainApi.post('/acounts/signup', {
            name: values.name,
            email:values.email,
            password: values.password,
            phone: '41987232750'
        });
        console.log(res)
    }

    const login = async() => {

        if (values.email.length == 0 || values.email == '' || values.email == ' ') {
            displayAlert();
            console.log("Email invalid")
            return
        }
        if (values.password.length == 0 || values.password.length < 8 || values.password == '' || values.password == ' ') {
            displayAlert();
            console.log("Password invalid")
            return
        }

        const res = await mainApi.post('/acounts/signin', {
            login: values.email,
            password: values.password
        });
        console.log(res)
        setToken(res.data.token);
        localStorage.setItem('tk', token);

        if(res.status == 200) {
            window.location.href = '/application'
        }
    }

    return (
        <section className="full-page">
            <form className="form">
                <Logo />


                {
                    showAlert &&
                    <h1>
                        showAlert
                    </h1>
                }

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
                 {
                !values.isMember && 
                    <FormRow 
                        type='text'
                        name='phone'
                        labelText='phone'
                        handleChange={handleChange}
                        value={values.phone}
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

                { !values.isMember ?
                    <button type="button" onClick={register}>
                        Register
                    </button>
                    :
                    <button type="button" onClick={login}>
                        SignIn
                    </button>
                }

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