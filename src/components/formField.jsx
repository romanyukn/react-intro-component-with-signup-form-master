import React from 'react';

function FormField() {
    return(
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="First name"
            />
            <div className="invalid-feedback"></div>
        </div>
    )
}

export default FormField;