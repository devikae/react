import React, { useState } from "react";
import { useEffect } from "react";

function ClickCounter(props) {
    	// var count = 0;
        // 이렇게 사용 하면 재 렌더링이 되지 않아 화면은 바뀌지 않는다.
        const [count, setCount] = useState(0);
        // 변수 각각에 대해 set함수가 따로 존재
        
        useEffect(() => {
            document.title = `You clicked ${count} times`;
        });

        return (
            <div>
                <p>총 {count}번 클릭 했습니다. </p>
                {/* <button onClick={() => count++}> 클릭 </button>  */}
                <button onClick={() => setCount(count+1)}> 클릭 </button>	
            </div>
        )
    } 

    export default ClickCounter;