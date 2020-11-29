import React from 'react';

function FormField(props) {
    return(
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder={props.name}
            />
            <div className="invalid-feedback"></div>
        </div>
    )
}

export default FormField;