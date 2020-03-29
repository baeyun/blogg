module.exports = (req, res) => {
  const {
    query: { name }
  } = req;

  console.log(req.query);

  res.send(`Hello ${name}!`);
};
