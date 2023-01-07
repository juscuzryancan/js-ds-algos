const testException = (callback) => {
  try {
    callback();
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  testException
}
