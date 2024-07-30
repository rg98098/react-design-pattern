export const Button = ({ size, color, text, ...props}) => {
    return (
        <button style={{
            backgroundColor: color,
            fontSize: size === 'large' ? '32px' : '8px',
            padding: size === 'large' ? '32px': '8px'
        }} {...props}>
            {text}
        </button>
    )
}

export const DangerButton = props => {
    return <Button color="red" {...props}/>
}

export const BigSuccessButton = props => {
    return (
        <Button {...props} size="large" color="green"/>
    )
}