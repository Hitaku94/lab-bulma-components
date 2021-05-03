import React from 'react'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import '../signup/Signup.css'

const Signup = () => {
    return (
        <div class="signup">
            <h1>Sign up</h1>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="" />
            <CoolButton isSmall isSuccess>Sign up</CoolButton>
        </div>
    )
}

export default Signup