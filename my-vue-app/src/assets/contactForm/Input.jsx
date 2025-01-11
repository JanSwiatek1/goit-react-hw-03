import './Label.css'
import { nanoid } from 'nanoid';

export const Input = ({ value, onChange, type, name }) => {
    const uniqueId = nanoid()
    return <>
    <label className="label" htmlFor={uniqueId}>{name}</label>

        <input
            id={uniqueId}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    
    </>
  
}
