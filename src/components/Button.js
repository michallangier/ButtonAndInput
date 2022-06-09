import { useState } from 'react'

function Button({ btn }) {
    const [color, setColor] = useState('')

    return (
        <button
            onClick={() => {
                setColor(btn())
            }}
            style={{ backgroundColor: color }}
        >Type in standard color and click:</button>
    )
};
export default Button;