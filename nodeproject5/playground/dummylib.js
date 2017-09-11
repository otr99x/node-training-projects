module.exports = () => {
    var data = null;
    return{
      init: (obj) => {
        data = obj;
      },
      read: () => {
        console.log(data);
      },
    };

  };
