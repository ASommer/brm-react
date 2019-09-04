import React from 'react'

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator" style={{
            backgroundColor: 'rgba(230,230,230,.8',
            display: 'flex',
            position: "absolute",
            height: '100%',
            width: '100%',
            margin: 'auto',
            zIndex: 1200,
            fontSize: '3rem'

        }}>

            <div className="loader"> </div>
        </div>
    )
}

export default LoadingIndicator
