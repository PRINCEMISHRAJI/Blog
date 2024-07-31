import React from 'react'
import { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label
                classname='inline-block mb-1 pl-1'
                htmlFor={id}> {label}
                </label>}
                <input
                type = {type}
                className={`py-2 px-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref= {ref}
                {...props}
                id={id}
                />
        </div>
    )
})

export default Input