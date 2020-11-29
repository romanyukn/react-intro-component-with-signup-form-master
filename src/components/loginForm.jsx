import React, {setState, useState} from 'react';
import FormField from './formField';

function creatField(name) {
   return {name: name, value: "", isValid: true};
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
      <div className="container">
        <div className="row">
            <div className="col-6 p-5">
            <h1>Learn to code by watching others</h1>
            See how experienced developer solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think is
            invaluable.
            </div>
            <div className="col-6 p-5">
                <div className="frame">  
                    <form>
                        {fields.map((el) => {return <FormField key={el.name} name={el.name} isValid={el.isValid}/>})}
                        <button className="btn btn-success btn-lg btn-block">
                            CLAIM YOUR FREE TRIAL
                        </button>
                    </form>
                </div>    
            </div> 
        </div>
      </div>
    );
  }

  export default LoginForm;

