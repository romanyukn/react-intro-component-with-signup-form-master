import React, {setState, useState} from 'react';
import FormField from './formField';

function creatField(name) {
   return {name: name, value: null, isValid: true};
}

const initialState = [
   creatField("First Name"),
   creatField("Last Name"),
   creatField("Email Address"),
   creatField("Password")
]

function LoginForm() {
    const [fields, setFields] = useState(initialState);

    return (
      <div>
        <form>
            <FormField />
            <button>
                CLAIM YOUR FREE TRIAL
            </button>
        </form> 
      </div>
    );
  }

  export default LoginForm;