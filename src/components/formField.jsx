import React from 'react';

function FormField(props) {
    return(
        <div className="form-group">
            <input
                type="text"
                className={props.className}
                id="formGroupExampleInput"
                name={props.name}
                value={props.value}
                isvalid={props.isValid}
                placeholder={props.name}
                onChange={(e) => props.onChange({name: props.name, value: e.target.value, isValid: props.isValid, className: props.className})}
            />
            <div className="invalid-feedback"></div>
        </div>
    )
}

export default FormField;