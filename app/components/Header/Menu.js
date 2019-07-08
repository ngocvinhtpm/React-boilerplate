import React, { Component } from 'react';
import { Link } from "react-router-dom";   


class Menu extends Component {
    render() {
        return (
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/contact">Liên hệ </Link></li>	
				</ul>
        );
    }
}

export default Menu;