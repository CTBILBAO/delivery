import * as Yup from "yup";

import products from "../../data";

const getStoreCoords = (id) => {
  const product = products.find((item) => item.id === parseInt(id));
  return product.store.location;
};
const getPrice = (id) => {
  const product = products.find((item) => item.id === parseInt(id));
  return product.price;
};

const getTienda = (id) => {
  const tienda = products.find((item) => item.id === parseInt(id));
  return tienda.store.name;
};

const getproductName = (id) => {
  const product = products.find((item) => item.id === parseInt(id));
  return product.title;
};

const getInitialValues = (id) => {
  const initialValues = {
    person: "",
    person2: "",
    dedicatory: "",
    phoneOrigin: "",
    phoneDestiny:"",
    email: "",
    date: `${new Date()}`,
    card: "",
    product: getproductName(id),
    valido: "",
    store: getTienda(id),
    price: `${getPrice(id)} Bs.-`,
    storeLocation: getStoreCoords(id),
    nit: "",
  };
  return initialValues;
};

const validationSchema = Yup.object({
  person: Yup.string().required("Nombre comprador es requerido"),
  person2: Yup.string(),
  phoneOrigin: Yup.number()
    .typeError("Telefono debe ser numerico")
    .required("Telefono comprador requerido"),
  phoneDestiny: Yup.number()
    .typeError("Telefono debe ser numerico"),
  email: Yup.string()
    .email("Formato de correo incorrecto")
    .required("Email requerido"),
  product: Yup.string().required(),
  card: Yup.number()
    .typeError("Tarjeta de Credito/Debito debe ser numerico")
    .required("Tarjeta requerida para procesar pago"),
  valido: Yup.string().required(
    "fecha de expiracion de la tarjeta es requerido"
  ),
  store: Yup.string().required(),
  price: Yup.string().required(),
  nit: Yup.number()
    .typeError("Nit debe ser numerico")
    .required("Nit es requerido"),
});

const formFields = [
  {
    name: "person",
    type: "text",
    label: "De:",
    required: true,
    sm: 6,
    md: 6,
  },
  {
    name: "person2",
    label: "Para:",
    type: "text",
    sm: 6,
    md: 6,
  },
  {
    name: "dedicatory",
    label: "Dedicatoria:",
    type: "text",
    rows: 3,
    multiline: true,
    sm: 12,
    md: 12,
  },
  {
    name: "phoneOrigin",
    label: "Telefono Remitente :",
    type: "text",
    required: true,
    sm: 3,
    md: 3,
  },
  {
    name: "phoneDestiny",
    label: "Telefono Destinatario :",
    type: "text",
    sm: 3,
    md: 3,
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    required: true,
    sm: 3,
    md: 3,
  },
  {
    name: "date",
    label: "Fecha de Entrega",
    type: "date",
    sm: 3,
    md: 3,
  },
  {
    name: "product",
    label: "Producto a comprar:",
    type: "text",
    required: true,
    sm: 4,
    md: 4,
    disabled: true,
  },
  {
    name: "store",
    label: "Tienda:",
    type: "text",
    required: true,
    sm: 4,
    md: 4,
    disabled: true,
  },
  {
    name: "price",
    label: "Total:",
    type: "text",
    required: true,
    sm: 4,
    md: 4,
    disabled: true,
  },
  {
    name: "card",
    label: "Numero de Tarjeta:",
    type: "text",
    required: true,
    sm: 4,
    md: 4,
  },
  {
    name: "valido",
    label: "Tarjeta valido hasta:",
    type: "text",
    required: true,
    sm: 4,
    md: 4,
  },
  {
    name: "nit",
    label: "Nit facturación:",
    type: "text",
    required: true,
    sm: 4,
    md: 4,
  },
];

export { getInitialValues, validationSchema, formFields };
