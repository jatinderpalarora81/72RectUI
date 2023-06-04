
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from '@chakra-ui/react'
import { useState } from "react";

export default function NumberCounter(props){

    const [value, setValue] = useState(1)
    const handleChange = (value) => {setValue(value); props.setCount(value)}

return (<NumberInput defaultValue={1} min={1} max={30} value={value+ " days"} onChange={handleChange}>
    <NumberInputField />
    <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
    </NumberInputStepper>
</NumberInput>);

}