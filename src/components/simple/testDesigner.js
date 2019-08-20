import React , { useState } from 'react';
import Button from "@material-ui/core/Button";

const SimpleTestDesigner = (props) => {
   
    const [defaultValue, setValue] = useState(0
      );


    function incrementVal() {
        setValue(defaultValue+1);
    }

    return (
        <div>
        
          <input
            type="text"
            value={defaultValue}
        
          />
         <Button color="primary" onClick={() => { incrementVal() }}>
              Primary
        </Button>
        </div>
      );
};

export default SimpleTestDesigner;