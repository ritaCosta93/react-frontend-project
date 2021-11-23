import React, {useState} from 'react'
import Input from '../../shared/components/FormElements/Input'
import './Auth.css'
import { VALIDATOR_REQUIRE,VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import {useForm} from '../../shared/hooks/form-hook'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'

const Auth = props => {

    const [isLoginMode,setIsLoginMode] = useState(true)

    const [formState,inputHandler,setFormData] = useForm({
        email:{
            value: '',
            isValid: false
        },
        password:{
            value: '',
            isValid: false
        }
    },false)

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    const switchModeHandler = () =>{

        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                name:undefined,
            },formState.inputs.email.isValid && formState.inputs.password.isValid)
        }else{
            setFormData({
                ...formState.inputs,
                name:{
                    value:'',
                    isValid:false
                }
            },false);
        }

        setIsLoginMode(prevMode => !prevMode);
    }

    return (
        <Card className="authentication">
        
                <h2>{isLoginMode ? 'Login' : 'Signup'}</h2>
                <hr/>
            <form onSubmit={authSubmitHandler}>
            {!isLoginMode && <Input element="input" id="name" type="text" label="Your Name" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a name" onInput={inputHandler}/>}
                <Input element="input" type="email" label="Email" id="email" placeholder="Email" onInput={inputHandler} validators={[VALIDATOR_EMAIL(),VALIDATOR_MINLENGTH(6)]} errorText="Please insert a valid email"/>
                <Input element="input" id="password" placeholder="Password" onInput={inputHandler} validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]} errorText="Please insert a valid password"/>
                <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? 'LOGIN':'SIGNUP'}</Button>
            </form>
            <Button inverse onClick={switchModeHandler}>{isLoginMode ? 'SIGNUP':'LOGIN'}</Button>
        </Card>
    )
}

export default Auth
