import React from 'react';

function FormField({name, value, isValid, error, className, onChange, onFocus}) {
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
                onFocus={() => onFocus(name)}
            />
            {!isValid && <div className="invalid-feedback">{error}</div>}
            
        </div>
    )
}

export default FormField;