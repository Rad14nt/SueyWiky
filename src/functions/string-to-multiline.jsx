
const StringToMultiline = (props) => {

    const { text } = props

    return(
        <>
            {text.split('\n').map((line, index) => <p key={index}>{line}</p>)}
        </>
    )
}

export default StringToMultiline
