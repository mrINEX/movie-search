function speechInput() {
  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  const recognition = new window.SpeechRecognition();
  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.lang = 'en';
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    document.querySelector('.input-search').value = speechToText.toLowerCase();
  };
  return recognition;
}

module.exports = {
  speechInput,
};
