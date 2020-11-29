import React from 'react';

function FormField(props) {
    return(
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                name={props.name}
                value={props.value}
                isValid={props.isValid}
                placeholder={props.name}
                onChange={props.onChange}
            />
            <div className="invalid-feedback"></div>
        </div>
    )
}

export default FormField;