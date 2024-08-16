// UseEffect hook used when you are going outside of React

import { useEffect, useState } from "react";


function Effect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log({ count })
    }, []);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Submit</button>
        </>
    )
}

export default Effect;