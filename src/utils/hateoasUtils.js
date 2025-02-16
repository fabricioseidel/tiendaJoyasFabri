const generateHATEOAS = (id) => {
  return [
    { rel: "self", method: "GET", href: `http://localhost:3000/joyas/${id}` },
    {
      rel: "filtros",
      method: "GET",
      href: "http://localhost:3000/joyas/filtros",
    },
  ];
};

module.exports = { generateHATEOAS };
