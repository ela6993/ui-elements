import { useState } from 'react';
import './index.css';

function Input(props) {
    const { defaultValue = 'nodanger', label = 'Name' } = props;
    const [isFocused, setIsFocused] = useState(false);

    const classNameInput = `input input--${defaultValue} input--${isFocused ? 'focused' : ''}`;
    const classNameLabel = `label label--${defaultValue} label--${isFocused ? 'focused' : ''}`;

    return (
        <div className="inputdiv">
            <label htmlFor="name" className={classNameLabel}>
                {label}
            </label>
            <input
                id="name"
                className={classNameInput}
                placeholder="Enter your name"
                onFocus={() => setIsFocused(true)}
            />
        </div>
    );
}

export default Input;
