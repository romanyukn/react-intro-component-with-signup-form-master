import React, {useState} from 'react';
import FormField from './formField';

function creatField(name) {
   return {name: name, value: "", isValid: true, className: "form-control", error: ""};
}

const initialState = {
   fields:[creatField("First Name"),
   creatField("Last Name"),
   creatField("Email Address"),
   creatField("Password")],
   isSubmitted: false,
   isValidated: false,
   isValid: false
}

function LoginForm() {
    const [state, setState] = useState(initialState);
    const emailCheck = /^\S+@\S+\.\S+$/

    function onInputChange(eachField) {
        const dataFields = state.fields.map((el) => {
            if (el.name === eachField.name) {
                return eachField;
            }
            else {
                return (el);
            } 
        })
        setState({...state, fields: dataFields}); 
    }

    function validate(fieldsToValidate) {
        const validated = fieldsToValidate.map((fieldToValidate) => {
            if(fieldToValidate.value === "") {
                return ({...fieldToValidate, className: "form-control is-invalid", isValid: false, error: `${fieldToValidate.name} cannot be empty`})
            } else if (fieldToValidate.name === "Email Address"){
                return validateEmail(fieldToValidate);   
            } return ({...fieldToValidate, isValid: true, className: "form-control"})
        })
        setState({...state, fields: validated});
    }

    function validateEmail(el) {
        if (!emailCheck.test(el.value)) {
            return ({...el, className: "form-control is-invalid", isValid: false, error: "It doesn't look like an e-mail"});
        }
    }

    function handleFocus(fieldName) {
        const fieldsChanged = state.fields.map((el) => {
            if(el.name === fieldName) {
                return ({...el, isValid: true, className: "form-control"})
            } else {
                return (el);
            }
        })
        setState({...state, fields: fieldsChanged});
    }

    function validForm() {
        const isValidFields = state.fields.map((el) => el.isValid);
        return isValidFields.every((el) => el === true);
    }

    function cleanForm() {
        if (validForm()) {
            const cleanedForm = state.fields.map((el) => {
                return ({...el, value: ""});
            })
            setState({...state, fields: cleanedForm});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate(state.fields);
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
                        {state.fields.map((el) => {
                            return <FormField 
                                key={el.name} 
                                name={el.name} 
                                value={el.value}
                                isValid={el.isValid}
                                error={el.error}
                                className={el.className}
                                onChange={onInputChange}
                                onFocus={handleFocus}
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

