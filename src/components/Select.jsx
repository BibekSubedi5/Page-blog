import React, { forwardRef, useId } from 'react'

function Select({
    options,
    className="",
    label,
    ...props


},ref) {
    const id =useId();
  return (
    <div className='w-full'>
        {label && <label
        htmlFor={id}
        className=''
        >
            </label>}
            <select>
                {options?.map((option)=>(
                    <option
                    key={option}
                    value={option}>
                   {option}
                    </option>
                ))}
            </select>
    </div>
  )
}

export default forwardRef(Select)