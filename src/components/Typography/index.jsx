import './index.css'

function Typography(props) {
    const {textSize = 'md', children} = props

    const className = `text text--${textSize}`

    return (
        <p className={className}>{children}</p>
    );
}

export default Typography;