import { useEffect, useState } from "react"


export const Timer = ({initialTime, endTime}) => {

    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime((countDown) => {
                if(countDown >= endTime){
                    clearInterval(timerInterval);
                    return "End";
                }
                return countDown + 1;
            });
        
    }, 1000);

    return () => {
        clearInterval(timerInterval);
    }
},[])
return <div>
    <h2>Time : {time}</h2>
</div>
}
