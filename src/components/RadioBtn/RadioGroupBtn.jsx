import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from "react";

export default function RadioGroupBtn(props) {
     const [val, setVal] = useState('')
    return (
        <RadioGroup onChange={ v => {setVal(v); props.setValue(v)
        }} value={val}>
            <Stack direction='row'>
                <Radio value='1'>1 Day</Radio>
                <Radio value='3'>3 Days</Radio>
                <Radio value='5'>5 Days</Radio>
                <Radio value='7'>7 Days</Radio>
                <Radio value='10'>10 Days</Radio>
            </Stack>
        </RadioGroup>
    );

}