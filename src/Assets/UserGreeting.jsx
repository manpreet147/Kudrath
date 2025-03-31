import React from 'react'
import PropTypes from 'prop-types'

const UserGreeting = (props) => {
    const welcomeMessage = <h2 className='welcome-message'>
        Welcome {props.username}
    </h2>
    const loginprompt = <h2 className='login-prompt'>Please Login to continue</h2>
    return (props.isLoggedIn ?
        welcomeMessage : loginprompt

    )
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}


export default UserGreeting
