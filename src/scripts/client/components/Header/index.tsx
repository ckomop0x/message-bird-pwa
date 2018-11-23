import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {HeaderStyled, HeaderMenu} from './header-styles';

export interface HeaderProps {
    [key: string]: any;
}

const Header = (props: HeaderProps) => {
    const {balance} = props;

    return (
        <HeaderStyled>
            <h1>Messages</h1>
            <HeaderMenu>
                <NavLink className="nav-item" to="/sms" exact={true}>
                    All messages
                </NavLink>
                <NavLink className="nav-item" to="/sms/inbox" exact={true}>
                    Received
                </NavLink>
                <NavLink className="nav-item" to="/sms/outbox" exact={true}>
                    Sent
                </NavLink>
                <NavLink className="nav-item" to="/sms/send" exact={true}>
                    New message
                </NavLink>
            </HeaderMenu>
            <div>
                {balance && balance.type}: {balance && balance.amount}
            </div>
        </HeaderStyled>
    );
};

export default Header;