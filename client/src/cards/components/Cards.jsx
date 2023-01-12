import React from "react";
import Card from "./card/Card";
import { Grid, Typography } from "@mui/material";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";

const Cards = ({ cards }) => {
  const handleDeleteCard = (cardId) => console.log(`Delete card: ${cardId}`);
  const handleLikeCard = (cardId) => console.log(`Like card: ${cardId}`);

  // if (!cards.length)
  //   return (
  //     <Typography>
  //       Oops... it seems there are no business cards to display
  //     </Typography>
  //   );

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
          <Card
            card={card}
            handleDeleteCard={handleDeleteCard}
            handleLikeCard={handleLikeCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired,
};

export default Cards;
