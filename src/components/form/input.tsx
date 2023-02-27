import React from "react";

type CustomFieldProps = {
    type: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const CustomTextField = (props: CustomFieldProps) => {
    return (
        <input
            type={props.type}
            name={props.name}
            onChange={props.changeHandler}
            placeholder={props.name}
        />
    );
}

export default CustomTextField;