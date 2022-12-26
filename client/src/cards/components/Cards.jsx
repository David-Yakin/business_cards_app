import React from "react";
import Card from "./card/Card";
import { Grid, Typography } from "@mui/material";

const Cards = () => {
  const cards = [
    {
      _id: "639221ec70962dd4df2b709a",
      title: "first",
      subtitle: "Business Headline",
      description: "some desc",
      phone: "0500000000",
      email: "admin@gmail.com",
      web: "https://www.hackampus.com",
      image: {
        url: "https://cdn.pixabay.com/photo/2019/12/18/19/22/christmas-4704706_960_720.jpg",
        alt: "Wowww this is Apple Watch",
        _id: "639221ec70962dd4df2b709c",
      },
      address: {
        state: "israel",
        country: "israel",
        city: "Tel Aviv",
        street: "STREET",
        houseNumber: 1,
        zip: 123456,
        _id: "639221ec70962dd4df2b709d",
      },
      bizNumber: 6480165,
      createdAt: "2022-12-08T17:42:04.379Z",
      user_id: "638503e4caa1f3d9dbbcf7bc",
      likes: ["639221ec70962dd4df2b70a3"],
      __v: 0,
    },
    {
      _id: "639221ec70962dd4df2b709b",
      title: "second",
      subtitle: "Business Headline",
      description: "some desc",
      phone: "0500000000",
      email: "admin@gmail.com",
      web: "https://www.hackampus.com",
      image: {
        url: "https://cdn.pixabay.com/photo/2019/12/18/19/22/christmas-4704706_960_720.jpg",
        alt: "Wowww this is Apple Watch",
        _id: "639221ec70962dd4df2b709c",
      },
      address: {
        state: "israel",
        country: "israel",
        city: "Tel Aviv",
        street: "STREET",
        houseNumber: 1,
        zip: 123456,
        _id: "639221ec70962dd4df2b709d",
      },
      bizNumber: 6480165,
      createdAt: "2022-12-08T17:42:04.379Z",
      user_id: "638503e4caa1f3d9dbbcf7bc",
      likes: ["639221ec70962dd4df2b70a3"],
      __v: 0,
    },
    {
      _id: "639221ec70962dd4df2b709c",
      title: "third",
      subtitle: "Business Headline",
      description: "some desc",
      phone: "0500000000",
      email: "admin@gmail.com",
      web: "https://www.hackampus.com",
      image: {
        url: "https://cdn.pixabay.com/photo/2019/12/18/19/22/christmas-4704706_960_720.jpg",
        alt: "Wowww this is Apple Watch",
        _id: "639221ec70962dd4df2b709c",
      },
      address: {
        state: "israel",
        country: "israel",
        city: "Tel Aviv",
        street: "STREET",
        houseNumber: 1,
        zip: 123456,
        _id: "639221ec70962dd4df2b709d",
      },
      bizNumber: 6480165,
      createdAt: "2022-12-08T17:42:04.379Z",
      user_id: "638503e4caa1f3d9dbbcf7bc",
      likes: ["639221ec70962dd4df2b70a3"],
      __v: 0,
    },
  ];
  // const cards = [];

  const handleDeleteCard = (cardId) => console.log(`Delete card: ${cardId}`);
  const handleLikeCard = (cardId) => console.log(`Like card: ${cardId}`);

  if (!cards.length)
    return (
      <Typography>
        Oops... it seems there are no business cards to display
      </Typography>
    );

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

export default Cards;
