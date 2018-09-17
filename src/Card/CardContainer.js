import React from "react";
import Card from "./Card.js"

const CardContainer = ({ cardContent }) => {
    return (    
    cardContent.map((user, i) => {
        return(
            // <div key= {`container ${i}`}>
                <Card
                    title= {user.title}
                    description= {user.description}
                    // descriptionList= {user.descriptionList}
                    image= {user.image}
                />
            // </div>
        );
    })
);
}

export default CardContainer;