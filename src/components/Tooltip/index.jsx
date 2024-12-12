import './index.css'

function Tooltip(props) {

    const {children, text, position} = props
    const className = `tooltip-text tooltip-text--${position}`

    return ( 
        <div className="tooltip-container">
            <span className = 'tooltip'><strong>{children}</strong></span>
            <span className={className}>{text}</span>
        </div>
     );
}

export default Tooltip;