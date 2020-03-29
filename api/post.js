module.exports = (req, res) => {
  const {
    query: { name }
  } = req;

  console.log(req);

  res.send(`Hello ${name}!`);
};
