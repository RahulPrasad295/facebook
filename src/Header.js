import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// import { Avatar } from '@material-ui/core'
import { Avatar, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider'

function Header() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className = "header">
            <div className = "header__left">
                <img src = "https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt = "fb-logo" />
                <div className = "header__input">
                <SearchIcon />
                <input placeholder = "Search Facebook" type = "text" />
                </div>
            </div>
            <div className = "header__center">
                <div className = "header__option header__option--active">
                    <HomeIcon frotSize = "large" />
                </div>
                <div className = "header__option">
                    <FlagIcon frotSize = "large" />
                </div>
                <div className = "header__option">
                    <SubscriptionsIcon frotSize = "large" />
                </div>
                <div className = "header__option">
                    <StorefrontIcon frotSize = "large" />
                </div>
                <div className = "header__option">
                    <SupervisedUserCircleIcon frotSize = "large" />
                </div>
            </div>
            <div className = "header__right">
                <div className = "header__info">
                    <Avatar src = {user.photoURL} />
                    <h4>{user.displayName}</h4>
                    
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                
            </div>

        </div>
    )
}

export default Header
