module.exports.fnCustomResponse = function (status, errorMsg, data) {
    return {
      status: status,
      message: errorMsg,
      result: data,
    };
  };