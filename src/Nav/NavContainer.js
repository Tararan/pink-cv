import React from 'react';
import Nav from './Nav'; 

const NavContent = ({ navContent }) => {
    return (
        <nav className="Nav">
            {
                navContent.map((user, i) => {
                    return (
                        <Nav key={`NavContent ${i}`}
                            listItem={user.listItem}
                        />
                    );
                })
            }
        </nav>
    );
}

export default NavContent;