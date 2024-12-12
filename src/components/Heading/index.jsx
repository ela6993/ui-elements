function Heading(props) {
    const {level, children} = props
    const Tag = `h${level}`

    return ( 
        <Tag>{children}</Tag>
     );
}

export default Heading;