import React from 'react';

function FormField({name, value, isValid, eMail, className, onChange}) {
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
                onChange={(e) => onChange({name, value, isValid, eMail, className, value: e.target.value})}
            />
            {!isValid && <div className="invalid-feedback">{name} cannot be empty</div>}
            {!eMail && <div className="invalid-feedback">It doesn't look like e-mail</div>}
        </div>
    )
}

export default FormField;