import React from "react";

type CustomFieldProps = {
    data: number,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Range = (props: CustomFieldProps) => {
    return (
      <input 
          type="range" 
          id="volume" 
          name="volume"
          min="0"
          max={props.data - 1}
          onChange={props.changeHandler}
        />
    );
}

export default Range;