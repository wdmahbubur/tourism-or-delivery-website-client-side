import React from 'react';

const InputField = ({ type, placeholder, ...rest }) => {
    return (
        <input type={type} className="form-control my-3" placeholder={placeholder} {...rest} />
    );
};

export default InputField;