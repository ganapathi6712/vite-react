import React, { Component } from 'react'




export default class Nav extends Component {
    render() {
        return (
            <>
                <div className='logo navkey'>
                </div>


                <div className='nav1 navkey'>
                    <input type='search' placeholder='Search'></input>
                </div>
                <div className='navi'>
                    <div className='nav2  navkey'>
                        <a href="">Cart</a>
                    </div>


                    <div className='nav2  navkey'>
                        <a href="">Login</a>
                    </div>


                    <div className='nav4  navkey'>
                        <a href="">Become a Seller</a>
                    </div>
                </div>
            </>
        )
    }
}
