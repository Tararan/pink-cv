import React from 'react';
import Nav from './Nav'; 

const NavList = ({ navContent }) => {
    return (
        <div>
            {
                navContent.map((user, i) => {
                    return (
                        <Nav key={`NavList ${i}`}
                            listItem={user.listItem}
                        />
                    );
                })
            }
        </div>
    );
}

export default NavList;