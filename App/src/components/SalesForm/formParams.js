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
    phone: "",
    email: "",
    card: "",
    product: getproductName(id),
    valido: "",
    store: getTienda(id),
    price: `${getPrice(id)} Bs.-`,
    storeLocation: getStoreCoords(id),
  };
  return initialValues;
};

const validationSchema = Yup.object({
  person: Yup.string().required("Nombre comprador es requerido"),
  person2: Yup.string(),
  phone: Yup.number()
    .typeError("Telefono debe ser numerico")
    .required("Telefono requerido"),
  email: Yup.string().email('Formato de correo incorrecto').required("Email requerido"),
  product: Yup.string().required(),
  card: Yup.number()
    .typeError("Tarjeta de Credito/Debito debe ser numerico")
    .required("Tarjeta requerida para procesar pago"),
  valido: Yup.string().required(
    "fecha de expiracion de la tarjeta es requerido"
  ),
  store: Yup.string().required(),
  price: Yup.string().required(),
});

const formFields = [
  {
    name: "person",
    type: "text",
    label: "De:",
    required: true,
    sm: 6,
    md:6
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
    label: "Mensaje de Tarjeta:",
    type: "text",
    rows: 3,
    multiline: true,
    sm: 12,
    md: 12,
  },
  {
    name: "phone",
    label: "Telefono:",
    type: "text",
    required: true,
    sm: 6,
    md: 6,
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    required: true,
    sm: 6,
    md: 6,
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
    sm: 6,
    md: 6,
  },
  {
    name: "valido",
    label: "Valido hasta:",
    type: "text",
    required: true,
    sm: 6,
    md: 6,
  },
];

export { getInitialValues, validationSchema, formFields };
