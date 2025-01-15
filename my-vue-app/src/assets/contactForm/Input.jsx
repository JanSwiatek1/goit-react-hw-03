import './Label.css'
import PropTypes from 'prop-types';
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
Input.propTypes = {
  onChange: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,

};