const products = [
  {
    id: 1,
    category: 1,
    title: "Mix Chocolates",
    path:
      "https://images.unsplash.com/photo-1580904506207-b6319133a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Caja de chocolates y galletas",
    price: "125",
    store: {
      id: 3,
      name: "Ceibo",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  {
    id: 2,
    category: 1,
    title: "Chocolates Tentacion",
    path:
      "https://images.unsplash.com/photo-1526081715791-7c538f86060e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Caja de chocolates con crema de leche",
    price: "170",
    store: {
      id: 2,
      name: "Manjar de oro",
      location: {
        lat: -17.392358,
        lng: -66.157753,
      },
    },
  },
  {
    id: 3,
    category: 1,
    title: "Candy box",
    path:
      "https://images.unsplash.com/photo-1566565286951-f81c7ba5619d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Caja de 6 unidades de Chocolates seleccionados",
    price: "80",
    store: {
      id: 2,
      name: "Ceibo",
      location: {
        lat: -17.392358,
        lng: -66.157753,
      },
    },
  },
  {
    id: 4,
    category: 1,
    title: "Ramo de Tulipanes",
    path:
      "https://images.unsplash.com/photo-1458229865435-7cbe781270e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Tulipanes de color amarillo, rojo, rosa y blancas",
    price: "80",
    store: {
      id: 1,
      name: "Chocolatería Quillacollo",
      location: {
        lat: -17.395235,
        lng: -66.2813,
      },
    },
  },
  {
    id: 5,
    category: 1,
    title: "Teddy Bear",
    path:
      "https://images.unsplash.com/photo-1584315673053-593dc9bf7577?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Oso Teddy incluye su vehiculo jeep",
    price: "145",
    store: {
      id: 1,
      name: "Chocolatería Quillacollo",
      location: {
        lat: -17.395235,
        lng: -66.2813,
      },
    },
  },
  {
    id: 6,
    category: 1,
    title: "Ramo de Rosas",
    path:
      "https://images.unsplash.com/photo-1587635544862-0e0292bd8ab1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Ramo de rosas rojas",
    price: "95",
    store: {
      id: 3,
      name: "Manjar de oro",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  // ADULTOS PRODUCTS
  {
    id: 7,
    category: 2,
    title: "Camara Canon EOS 80",
    path:
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Camara Profesional UHD",
    price: "520",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  {
    category: 2,
    id: 8,
    title: "Cuadro: 'Birds'",
    path:
      "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=905&q=80",
    description: "Caja de chocolates con crema de leche",
    price: "142",
    store: {
      id: 5,
      name: "Mundo de Pinturas",
      location: {
        lat: -17.392358,
        lng: -66.157753,
      },
    },
  },
  {
    category: 2,
    id: 9,
    title: "Cuadro: Casa de Campo",
    path:
      "https://images.unsplash.com/photo-1532479255663-1ded0438a701?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Cuadro de David Clode",
    price: "325",
    store: {
      id: 5,
      name: "Mundo de Pinturas",
      location: {
        lat: -17.392358,
        lng: -66.157753,
      },
    },
  },
  {
    category: 2,
    id: 10,
    title: "Smarth Watch",
    path:
      "https://images.unsplash.com/photo-1509386175345-24d4e16ae35f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
    description: "Reloj Smarth Samsung",
    price: "620",
    store: {
      id: 6,
      name: "Digital World SRL",
      location: {
        lat: -17.395235,
        lng: -66.2813,
      },
    },
  },
  {
    category: 2,
    id: 11,
    title: "Head Phones JBL",
    path:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "JBL auriculares bluetooth",
    price: "300",
    store: {
      id: 6,
      name: "Digital World SRL",
      location: {
        lat: -17.395235,
        lng: -66.2813,
      },
    },
  },
  {
    category: 2,
    id: 12,
    title: "Aretes con piedras preciosas",
    path:
      "https://images.unsplash.com/photo-1569694254868-09e8c96258c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    description: "Aretes Bañados en oro",
    price: "210",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  {
    id: 20,
    category: 2,
    title: "Ramo de Flores Rojas",
    path:
      "https://images.unsplash.com/photo-1512056495345-913a0c261dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Combinacion perfecta de flores rojas",
    price: "120",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  // KIDS KIDS KIDS KIDS 
  {
    id: 13,
    category: 3,
    title: "Muñeca Rapunsel",
    path:
      "https://images.unsplash.com/photo-1558679928-be7e02981a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Muñeca de Rapunsel para niñas menores de 6 años",
    price: "55",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  {
    id: 14,
    category: 3,
    title: "Legos Batman and Hulk",
    path:
      "https://images.unsplash.com/photo-1554579653-08ba74000d7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Promocion 2 x 1",
    price: "70",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  {
    id: 15,
    category: 3,
    title: "Auto Transformer",
    path:
      "https://images.unsplash.com/photo-1590065433118-2b8ea61d6f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    description: "Se transforma en robot",
    price: "92",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  {
    id: 16,
    category: 3,
    title: "Woody Toy Story",
    path:
      "https://images.unsplash.com/photo-1585516458039-a2f4217486f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    description: "Incluye accesorios y sombrero",
    price: "75",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  {
    id: 17,
    category: 3,
    title: "PSP video consola",
    path:
      "https://images.unsplash.com/photo-1588689115724-a624efec3c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "PSP color rosa, ideal para niñas",
    price: "745",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  {
    id: 18,
    category: 3,
    title: "Balon de futbol",
    path:
      "https://images.unsplash.com/photo-1585129918930-d1f1179a81e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    description: "Balon edicion limitada Bayern Munich",
    price: "422",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
  {
    id: 19,
    category: 3,
    title: "Muñeca fotografa",
    path:
      "https://images.unsplash.com/photo-1559710302-3145122bbb64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Incluye mascota",
    price: "99",
    store: {
      id: 4,
      name: "Gift and More",
      location: {
        lat: -17.394314,
        lng: -66.157246,
      },
    },
  },
];

export default products;
