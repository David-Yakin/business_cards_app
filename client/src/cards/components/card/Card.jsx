import React from "react";
import MuiCard from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/types/cardType";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

const Card = ({ card, onDelete, handleLikeCard }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar
        cardId={card._id}
        onDelete={onDelete}
        handleLikeCard={handleLikeCard}
        cardUserId={card.user_id}
      />
    </MuiCard>
  );
};

Card.propTypes = {
  card: cardType.isRequired,
  onDelete: func.isRequired,
  handleLikeCard: func.isRequired,
};

export default Card;
