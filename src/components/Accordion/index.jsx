import { useState } from 'react';
import './index.css'

function Accordion (props) {
    const {title, children, defaultOpen = true} = props
    const [isOpened, setIsOpened] = useState(defaultOpen)

    const changeState = () => {
        setIsOpened((prev) => !prev)
    }

    const classNameContent = `content content--${isOpened}`

    return ( 
        <div className = 'accordion'>
            <div className = 'title'>
                <span>{title}</span>
                <button className = 'button' onClick={changeState}>{isOpened ? '-': '+'}</button>
            </div>
            <div className = {classNameContent}>{children}</div>
        </div>
    );
}

export default Accordion ;