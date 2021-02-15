import React from 'react'

const Title = (props) => {

    const TitleStyle = {
        color: "#333333"
    }


    return (
        <div style={TitleStyle}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title