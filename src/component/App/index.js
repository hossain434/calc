import React, {useEffect, useState} from 'react';
import "./App.css";
import Button from "../button";
import icon from "../../assets/icon.png";
import commafy from "../../utils/commafy.js";
import Clock from 'react-live-clock';
const App = () => {
const[time,setTime] = useState(new Date());
const [value,setValue]= useState("0");
const[memory, setMemory] = useState(null);
const[operator, setOperator] = useState(null);
// useEffect(() => {
//     setTime(new Date());
// }, [new Date().getMinutes()]);

const handleButtonPress = props => ()=>{
 const num = parseFloat(value);
    if (props === 'AC'){
        setValue("0");
        setMemory(null);
        return;
    }

if (props === '±'){
    setValue((num * -1).toString());
    return;
}

if (props === '%'){
    setValue((num/100).toString());
    setMemory(null);
    setOperator(null);
    return;
} 

if (props === '+'){

    if (operator != null) {
        if (operator === '+'){
            setMemory(memory + num);
        }
        else if (operator === '-'){
            setMemory((memory - num));
        }
        
        else if (operator === '🞪'){
            setMemory((memory * num));
        }
        
        else if (operator === '÷'){
            setMemory((memory / num));
        }
    }
        else {
            setMemory(num);
        }

    setValue('0');
    setOperator('+');
    return;

}

if (props === '−'){
    if (operator != null) {
        if (operator === '+'){
            setMemory(memory + num);
        }
        else if (operator === '−'){
            setMemory(memory - num);
        }
        
        else if (operator === '🞪'){
            setMemory((memory * num));
        }
        
        else if (operator === '÷'){
            setMemory(memory / num);
        }
    }
        else {
            setMemory(num);
        }
    setValue('0');
    setOperator('−');
    return;
}

if (props === '🞪'){
    if (operator != null) {
        if (operator === '+'){
            setMemory(memory + num);
        }
        else if (operator === '-'){
            setMemory(memory - num);
        }
        
        else if (operator === '🞪'){
            setMemory(memory * num);
        }
        
        else if (operator === '÷'){
            setMemory(memory / num);
        }
    }
        else {
            setMemory(num);
        }
    setValue('0');
    setOperator('🞪');
    return;
}

if (props === '÷'){
    if (operator != null) {
        if (operator === '+'){
            setMemory(memory + num);
        }
        else if (operator === '-'){
            setMemory(memory - num);
        }
        
        else if (operator === '🞪'){
            setMemory(memory * num);
        }
        
        else if (operator === '÷'){
            setMemory(memory / num);
        }
    }
        else {
            setMemory(num);
        }
    setValue('0');
    setOperator('÷');
    return;
}

if (props === '='){
if (!operator)
    return;

    if (operator === '+'){
        setValue((memory + num));
    }
    else if (operator === '−'){
        setValue((memory - num));
    }
    
    else if (operator === '🞪'){
        setValue((memory * num));
    }
    
    else if (operator === '÷'){
        setValue((memory / num));
    }

setMemory(null);
setOperator(null);
return;
}
if (props ==="."){
if (value.toString().includes(".")) return;
setValue(value + ".");
return;
}

if (value[value.length-1] === "."){
    setValue(value + props);
} else {
setValue((parseFloat(num + props)));
}
};

return (
<div className="App">
<div className="top">
<div className ="time">
 {/* {time.getHours().toString().padStart(2,'0')}:{time.getMinutes().toString().padStart(2,'0')} */}
 <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
</div>
<div className = "menu">
    <img src={icon} alt="menu"/>
</div>
</div>
<div className="display">{commafy(value.toString())}</div>
<div className="buttons">
<Button onButtonClick={handleButtonPress} props="AC" type="function" />
<Button onButtonClick={handleButtonPress} props="±" type="function"  />
<Button onButtonClick={handleButtonPress} props="%" type="function"  />
<Button onButtonClick={handleButtonPress} props="÷" type="operator"  />
<Button onButtonClick={handleButtonPress} props="7" />
<Button onButtonClick={handleButtonPress} props="8" />
<Button onButtonClick={handleButtonPress} props="9" />
<Button onButtonClick={handleButtonPress} props="🞪" type="operator" />
<Button onButtonClick={handleButtonPress} props="4" />
<Button onButtonClick={handleButtonPress} props="5" />
<Button onButtonClick={handleButtonPress} props="6" />
<Button onButtonClick={handleButtonPress} props="−" type="operator" />
<Button onButtonClick={handleButtonPress} props="1" />
<Button onButtonClick={handleButtonPress} props="2" />
<Button onButtonClick={handleButtonPress} props="3" />
<Button onButtonClick={handleButtonPress} props="+" type="operator" />
<Button onButtonClick={handleButtonPress} props="0" />
<Button onButtonClick={handleButtonPress} props="." />
<Button onButtonClick={handleButtonPress} props="=" type="operator" />
</div>
<div className="bottom"/>
</div>
);
};
export default App;