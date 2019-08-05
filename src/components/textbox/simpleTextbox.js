import React , { useState } from 'react';


const TextBox = (props) => {
   
    const [defaultValue, setValue] = useState(
      );

    
    return (
        <div>
        {props.label}
          <input
            type="text"
            value={props.defaultvalue}
            placeholder={props.defaultplaceholder}
            onChange={event => setValue(event.target.value)}
            onBlur={props.callback(defaultValue)}
          />
        </div>
      );
};

export default TextBox;