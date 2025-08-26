import React from 'react'
import PropTypes from 'prop-types'

const UserGreeting = ( {
    isLoggedIn= false,
    username= "Guest",
}) => {
    const welcomeMessage = <h2 className='welcome-message'>
        Welcome {username}
    </h2>
    const loginprompt = <h2 className='login-prompt'>Please Login to continue</h2>
    return (isLoggedIn ?
        welcomeMessage : loginprompt

    )
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}


export default UserGreeting
