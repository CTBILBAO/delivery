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
            <td>Total:</td>
            <td>${data.price}</td>
          </tr>
          </tbody>
        </table>
        <p>Nuestro equipo de delivery realizara la entrega de su producto en unos minutos</p>
        <p>Telefono de Referencia: 77485691</p>
        <p>Gracias por su preferencia...</p>`,
  };

  const mailOptions2 = {
    from: "regalos.forever.ever@gmail.com",
    subject: `Nuevo pedido de: ${data.person}`,
    to: "regalos.forever.ever@gmail.com",
    html: `
        <h2>Nota de Venta</h2>
        <h3>Detalle</h3>
        <table style="width:90%; border: 1px solid black">
        <tbody>
          <tr style="border: 1px solid black">
            <td><strong>Cliente:</strong></td>
            <td>${data.person}</td>
            <td><strong>Destinatario:</strong></td>
            <td>${data.person1}</td>
            <td><strong>Telefono Referencia:</strong></td>
            <td>${data.phoneOrigin}</td>
          </tr>
          <tr style="border: 1px solid black">
            <td><strong>Producto:</strong></td>
            <td>${data.product}</td>
            <td><strong>Precio:</strong></td>
            <td>${data.price}</td>
            <td><strong>Tienda:</strong></td>
            <td>${data.store}</td>
          </tr>
          </tbody>
        </table>
        <p>La presente transacción junto a todos los detalles serán impresos y se enviara el comprobante(factura) junto al servicio de delivery</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  transporter.sendMail(mailOptions2, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmailToUser;
