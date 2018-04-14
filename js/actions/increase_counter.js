const increaseCounter = c => ({type: 'INCREASE', payload: c+1});

module.exports = {
  increaseCounter
}