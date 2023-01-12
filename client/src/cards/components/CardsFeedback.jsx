import React from "react";
import { arrayOf, bool, string } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Typography } from "@mui/material";
import Cards from "./Cards";
import cardType from "../models/types/cardType";

const CardsFeedback = ({ isPanding, error, cards }) => {
  if (isPanding) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  if (cards && !cards.length)
    return (
      <Typography>
        Oops... it seems there are no business cards to display
      </Typography>
    );

  if (cards && !!cards.length) return <Cards cards={cards} />;
};

CardsFeedback.propTypes = {
  isPanding: bool.isRequired,
  error: string,
  cards: arrayOf(cardType),
};

export default CardsFeedback;
