import React from 'react';
import Nav from './Nav'; 

const NavList = ({ navContent }) => {
    return (
        <nav className="Nav">
            {
                navContent.map((user, i) => {
                    return (
                        <Nav key={`NavList ${i}`}
                            listItem={user.listItem}
                        />
                    );
                })
            }
        </nav>
    );
}

export default NavList;