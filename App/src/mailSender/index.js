import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "regalos.forever.ever@gmail.com",
      pass: "regalosForeverCT65",
    },
  })
);

const options = {
  from: "regalos.forever.ever@gmail.com",
  subject: "Gracias por usar Regalos Forever web-app",
};

const sendEmailToUser = (data) => {
  console.log('DATOS SENDMAILER => ', data.person);
  const destinationEmail = data.email.trim();
  const mailOptions = {
    ...options,
    to: destinationEmail,
    text: `Estimado/a ${data.person}`,
    html: `<h3>Detalle</h3>
        <table style="width:100%">
        <tbody>
          <tr>
            <td>Producto:</td>
            <td>${data.product}</td>
            <td>Precio:</td>
            <td>${data.price}</td>
          </tr>
          </tbody>
        </table>
        <p>Nuestro servicio de delivery se encuentra transportando su producto a su destino</p>
        <p>Gracias por su preferencia...</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendEmailToUser;
