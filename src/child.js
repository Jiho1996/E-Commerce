import React from "react";

function ChildComponent(props){
    const {name, age} = props
    return <div>
        <p>이름은 {name}, 나이는 {age}.</p>
        </div>
}

function TimerComponent(){
    const [time, setTime] = React.useState(0);
    console.log("컴포넌트 업데이트");

    function updateTime(){
        setTime(time + 1);
    }

    return <div>
            <h3>{time}초</h3>
            <button onClick={updateTime}>1 상승</button>
        </div>

}

export { ChildComponent, TimerComponent };