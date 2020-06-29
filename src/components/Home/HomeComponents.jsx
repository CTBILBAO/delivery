import React from "react";

import Slider from "react-slick";
import { Typography, Grid, Card } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";

import styles from "./Home.module.scss";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.carousel}>
      <h2> Cada día tenemos mas clientes satisfechos: </h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1519197207615-b8008aa988e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            alt="Flowers"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1592500103581-5c3386dc0b3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Using Technologies"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1562840931-b8b53a1dbeb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="delivery boy"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1556228149-0b37a8638663?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            alt="happy girl"
          />
        </div>
      </Slider>
    </div>
  );
};

const About = () => {
  return (
    <div className={styles.about}>
      <Typography variant="h4" className={styles.aboutTitle}>
        Quienes Somos?
      </Typography>
      <Grid container spacing={2}>
        <Grid container item xs={12} sm={6} md={6}>
          <Card className={styles.card}>
            <img
              className={styles.aboutPicture}
              src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
              alt="happy girl"
            />
          </Card>
        </Grid>
        <Grid container item xs={12} sm={6} md={6}>
          <Typography variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            impedit repellat, at nostrum quidem unde quos quia id cumque
            voluptatum sint illo odit tempore, labore laborum ipsum soluta
            voluptatibus voluptas!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Typography variant='h4' className={styles.contactTitle}>Contactanos</Typography>
      <Grid container spacing={2}  alignItems='center' className={styles.grid}>
        <Grid container item xs={12} md={6} sm={6}>
          <Grid container alignItems='right' item xs={12} md={6} sm={6} direction="column">
            <h4>Siguenos</h4>
            <div>
              <FacebookIcon /> <span>facebook</span>
            </div>
            <div>
              <TwitterIcon /> twitter
            </div>
            <div>
              <InstagramIcon />
              Instagram
            </div>
          </Grid>
          <Grid container item xs={12} md={6} sm={6} direction="column">
            <h4>Llamanos</h4>
            <div>
              <PhoneIcon /> 4321477
            </div>
            <div>
              <WhatsAppIcon /> 77485691
            </div>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6} sm={6}>
        <Typography variant="body1">
          © Todos los derechos reservados ctbilbao
        </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export { About, SimpleSlider, Contact };
