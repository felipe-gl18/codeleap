import React, { useState } from 'react';

import { Signup } from '../pages/signup';

export function SignupComponent(){
    const [usernameState, setUsernameState] = useState(false);

    return (
        <Signup 
            usernameState={usernameState}
            setUsernameState={setUsernameState}
        />
    );
}