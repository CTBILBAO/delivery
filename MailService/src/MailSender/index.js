const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

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

const sendEmailToUser = (data) => {
  const destinationEmail = data.email.trim();
  const mailOptions = {
    from: "regalos.forever.ever@gmail.com",
    subject: "Gracias por usar Regalos Forever",
    to: destinationEmail,
    html: `
        <h2>Estimado/a: ${data.person}</h2>
        <p><strong>REGALOS FOREVER</strong> se complace en informarle que su compra fue procesada satisfactoriamente</p>
        <h3>Detalle</h3>
        <table style="width:90%">
        <tbody>
          <tr>
            <td>Producto:</td>
            <td>${data.product}</td>
            <td>Precio:</td>
            <td>${data.price}</td>
          </tr>
          </tbody>
        </table>
        <p>Nuestro equipo de delivery realizara la entrega de su producto en unos minutos</p>
        <p>Telefono de Referencia: 77485691</p>
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

module.exports = sendEmailToUser;
