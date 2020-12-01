import React from 'react';

function FormField({name, value, isValid, className, onChange}) {
    return(
        <div className="form-group">
            <input
                type="text"
                className={className}
                id="formGroupExampleInput"
                name={name}
                value={value}
                isvalid={isValid}
                placeholder={name}
                onChange={(e) => onChange({name, value, isValid, className, value: e.target.value})}
            />
            {!isValid && <div className="invalid-feedback">{name} cannot be empty</div>}
        </div>
    )
}

export default FormField;