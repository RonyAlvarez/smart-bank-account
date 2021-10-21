import React, { Component } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <NotificationsIcon style={circleIcon} />
            </header>
        )
    }
}

const headerStyle = {
    margin: '3%',
}

const circleIcon = {
    background: 'lightgrey',
    fontSize: "large",
    width: '2%%',
    height: '2%',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '2%',
    verticalAlign: 'middle',
    padding: '2%'
}

export default Header
