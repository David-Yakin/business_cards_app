import React from "react";
import MuiCard from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/types/cardType";
import { func } from "prop-types";

const Card = ({ card, handleDeleteCard, handleLikeCard }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardActionArea>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar
        cardId={card._id}
        handleDeleteCard={handleDeleteCard}
        handleLikeCard={handleLikeCard}
      />
    </MuiCard>
  );
};

Card.propTypes = {
  card: cardType.isRequired,
  handleDeleteCard: func.isRequired,
  handleLikeCard: func.isRequired,
};

export default Card;
