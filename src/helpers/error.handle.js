const handleHtpp = (res, error, errorRaw) => {
  console.log(errorRaw);
  res.status(500);
  res.send({ error });
};

export { handleHtpp };
