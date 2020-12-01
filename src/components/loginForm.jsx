import React, {useState} from 'react';
import FormField from './formField';

function creatField(name) {
   return {name: name, value: "", isValid: true, eMail: true, className: "form-control"};
}

const initialState = [
   creatField("First Name"),
   creatField("Last Name"),
   creatField("Email Address"),
   creatField("Password")
]

function LoginForm() {
    const [fields, setFields] = useState(initialState);
    const emailCheck = /^\S+@\S+\.\S+$/

    function onInputChange(eachField) {
        const dataFields = fields.map((el) => {
            if (el.name === eachField.name) {
                return eachField;
            }
            else {
                return (el);
            } 
        })
        setFields(dataFields); 
    }

    function validate(fieldsToValidate) {
        const validated = fieldsToValidate.map((fieldToValidate) => {
            if(fieldToValidate.value === "") {
                return ({...fieldToValidate, className: "form-control is-invalid", isValid: false, eMail: true})
            } else if (fieldToValidate.name === "Email Address"){
                return validateEmail(fieldToValidate);   
            } return ({...fieldToValidate, isValid: true, eMail: true, className: "form-control"})
        })
        setFields(validated);
    }

    function validateEmail(el) {
        if (!emailCheck.test(el.value)) {
            return ({...el, className: "form-control is-invalid", isValid: true, eMail: false});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate(fields);
    }

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
                    <form onSubmit={handleSubmit}>
                        {fields.map((el) => {
                            return <FormField 
                                key={el.name} 
                                name={el.name} 
                                value={el.value}
                                isValid={el.isValid}
                                eMail={el.eMail}
                                className={el.className}
                                onChange={onInputChange}
                                />}
                            )
                        }
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

