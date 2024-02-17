import './calculator.css'
import Display from "../Display/Display";
import React, {useState} from "react";
import {logDOM} from "@testing-library/react";

const Calculator = () => {

    const [input, setInput] = useState('')
    const [result, setResult] = useState(0)

    const handleButtonClick = value => {
        if(value === '='){
            try{
                setResult(eval(input))
            }catch (error){
                setResult('error')
            }

        }else if(value === 'C'){
            setInput ('')
        }
        else {
            setInput(input + value)
        }

    }

    return (
        <div className='calculator'>
        <Display showInput = {input} result = {result}/>
            <div className="buttons">
                <button className='button__number' onClick={() => handleButtonClick(7)}>7</button>
                <button className='button__number' onClick={() => handleButtonClick(8)}>8</button>
                <button className='button__number' onClick={() => handleButtonClick(9)}>9</button>
                <button className='button__number' onClick={() => handleButtonClick('/')}>/</button>
                <button className='button__number' onClick={() => handleButtonClick(4)}>4</button>
                <button className='button__number' onClick={() => handleButtonClick(5)}>5</button>
                <button className='button__number' onClick={() => handleButtonClick(6)}>6</button>
                <button className='button__number' onClick={() => handleButtonClick('*')}>*</button>
                <button className='button__number' onClick={() => handleButtonClick(1)}>1</button>
                <button className='button__number' onClick={() => handleButtonClick(2)}>2</button>
                <button className='button__number' onClick={() => handleButtonClick(3)}>3</button>
                <button className='button__number' onClick={() => handleButtonClick('-')}>-</button>
                <button className='button__number' onClick={() => handleButtonClick(0)}>0</button>
                <button className='button__number' onClick={() => handleButtonClick('.')}>.</button>
                <button className='button__number' onClick={() => handleButtonClick('=')}>=</button>
                <button className='button__number' onClick={() => handleButtonClick('+')}>+</button>
                <button className='button__number' onClick={() => handleButtonClick("C")}>C</button>
            </div>
        </div>
    );
};

export default Calculator;