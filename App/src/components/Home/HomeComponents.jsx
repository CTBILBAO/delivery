import React from "react";

import Slider from "react-slick";
import { Typography, Grid, Card } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

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
            src="https://images.unsplash.com/photo-1455819413567-ef04b7e1fe3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Flowers"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581264692613-6886eff81583?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Using Technologies"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1585781207753-00f54dc516af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Happy boy"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1584355065676-322fec22cc54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=738&q=80"
            alt="gifts"
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
            Somos un grupo de profesionales dedicados a crear soluciones
            innovadoras, inteligentes y fáciles, para “mejorar la forma de hacer
            tus compras de regalos en línea”. Nos preocupamos por brindarte el
            mejor servicio y la mejor experiencia de compra y envío de regalos
            de ocasión. Queremos mejorar la forma en que nuestros clientes hacen
            sus compras, simplificando su vida al tener la ventaja de comprar
            desde su hogar, oficina o donde quiera que se encuentre.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const Services = () => {
  return (
    <div className={styles.about}>
      <Typography variant="h4" className={styles.aboutTitle}>
        Servicios
      </Typography>
      <Grid container spacing={2}>
        <Grid container item xs={12} sm={6} md={6}>
          <Typography variant="h5">Programacion de envíos</Typography>
          <Typography variant="body1">
            Contamos con la opción de hacer la entrega de tu arreglo el mismo
            día en que lo ordenes o lo puedes agendar para fechas posteriores si
            así lo deseas. ¡Así no olvidarás ninguna fecha importante! .
          </Typography>
          <Typography variant="h5">Atención a clientes</Typography>
          <Typography variant="body1">
            Nuestros representantes siempre estarán al tanto de tu pedido
            gracias a nuestro eficiente sistema de seguimiento y atención
            telefónica y vía chat.
          </Typography>
          <Typography variant="h5">Garantía de calidad</Typography>
          <Typography variant="body1">
            En caso de que tu arreglo o regalo llegue dañado o incompleto
            contáctanos lo antes posible haciéndonos llegar fotografías que
            muestren la inconformidad.
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={6} md={6}>
          <Card className={styles.card}>
            <img
              className={styles.aboutPicture}
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
              alt="happy girl"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const Covid = () => {
  return (
    <div className={styles.about}>
      <Typography variant="h4" className={styles.aboutTitle}>
        Quedate en Casa!
      </Typography>
    <Grid container>
      <Grid Container item md={12} sm={12}>
        <Card className={styles.covidCard}>
          <img
            className={styles.covid}
            src="https://www.prensalibre.com/wp-content/uploads/2020/03/Instagram-En-Casa-1-1.jpeg?quality=82"
            alt="happy girl"
          />
        </Card>
      </Grid>
      <Grid Container item md={12} sm={12}>
        <Typography variant="body1">
          Estimados clientes, ante la difícil situación que atravesamos por el
          COVID-19, mantenemos nuestro compromiso de ofrecerles la mejor
          experiencia de compra en línea, para asegurar la seguridad y salud de
          nuestros clientes todos los productos ofertados, personal y servicio
          delivery atraviesa por un minucioso proceso de desinfección durante
          todo el procedimiento de la transferencia, para que podamos entregarle
          su producto libre de cualquier agente infeccioso.
        </Typography>
      </Grid>
    </Grid>
    </div>
  );
};
const Contact = () => {
  return (
    <div className={styles.contact}>
      <Typography variant="h4" className={styles.contactTitle}>
        Contactanos
      </Typography>
      <Grid container spacing={2} alignItems="center" className={styles.grid}>
        <Grid container item xs={12} md={6} sm={6}>
          <Grid
            container
            alignItems="flex-start"
            item
            xs={12}
            md={6}
            sm={6}
            direction="column"
          >
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

export { About, Services, SimpleSlider, Contact, Covid };
