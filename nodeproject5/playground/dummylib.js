module.exports = (data) => {
  var obj = data;
  return () => {
    return obj;
  };
};
