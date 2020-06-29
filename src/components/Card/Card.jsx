import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import styles from "./Card.module.scss";

const MediaCard = ({ id, path, title, description, price, store }) => {
  return (
    <Link to={`/producto/${id}`} className={styles.link}>
      <Card>
        <CardActionArea>
          <CardMedia className={styles.media} image={path} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography>{price} Bs.</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MediaCard;
