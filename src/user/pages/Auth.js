import React from 'react'
import Input from '../../shared/components/FormElements/Input'
import './Auth.css'
import { VALIDATOR_REQUIRE,VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import {useForm} from '../../shared/hooks/form-hook'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'

const Auth = props => {

    const [formState,inputHandler] = useForm({
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

    return (
        <Card className="authentication">
        
                <h2>Login</h2>
                <hr/>
            <form onSubmit={authSubmitHandler}>
                <Input element="input" type="email" label="Email" id="email" placeholder="Email" onInput={inputHandler} validators={[VALIDATOR_EMAIL(),VALIDATOR_MINLENGTH(6)]} errorText="Please insert a valid email"/>
                <Input element="input" id="password" placeholder="Password" onInput={inputHandler} validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]} errorText="Please insert a valid password"/>
                <Button type="submit" disabled={!formState.isValid} >LOGIN</Button>
            </form>
        
        </Card>
    )
}

export default Auth
