document.addEventListener('DOMContentLoaded', function () {
  var audio = document.querySelector("audio");
  var lyricsEnglish = document.querySelector("#lyrics-english");
  var lyricsSpanish = document.querySelector("#lyrics-spanish");

  var lyricsData = [
    { text: "At the time", time: 15, spanish: "En ese momento" },
    { text: "The whisper of birds", time: 18, spanish: "El susurro de los pájaros" },
    { text: "Lonely before the sun cried", time: 27, spanish: "Solo antes de que llorara el sol" },
    { text: "Fell from the sky", time: 32, spanish: "Cayó del cielo" },
    { text: "Like water drops", time: 33, spanish: "Como gotas de agua" },
    { text: "Where I'm now? I don't know why", time: 41, spanish: "¿Dónde estoy ahora? No sé por qué" },
    { text: "Nice butterflies in my hands", time: 47, spanish: "Mariposas bonitas en mis manos" },
    { text: "Too much light for twilight", time: 54, spanish: "Demasiada luz para el crepúsculo" },
    { text: "In the mood for the flowers love", time: 59, spanish: "Con ánimo para el amor de las flores" },
    { text: "That vision", time: 67, spanish: "Esa visión" },
    { text: "Really strong, blew my mind", time: 72, spanish: "Muy fuerte, me voló la mente" },
    { text: "Silence Let me see what it was", time: 78, spanish: "Silencio, déjame ver qué era" },
    { text: "I only want to live in clouds", time: 83, spanish: "Solo quiero vivir en las nubes" },
    { text: "Where I'm now? I don't know why", time: 91, spanish: "¿Dónde estoy ahora? No sé por qué" },
    { text: "Nice butterflies in my hands", time: 97, spanish: "Mariposas bonitas en mis manos" },
    { text: "Too much light for twilight", time: 104, spanish: "Demasiada luz para el crepúsculo" },
    { text: "In the mood for the flowers love", time: 108, spanish: "Con ánimo para el amor de las flores" },
    { text: "At the time", time: 144, spanish: "En ese momento" },
    { text: "The whisper of birds", time: 148, spanish: "El susurro de los pájaros" },
    { text: "Lonely before the sun cried", time: 153, spanish: "Solo antes de que llorara el sol" },
    { text: "Fell from the sky", time: 158, spanish: "Cayó del cielo" },
    { text: "Like water drops", time: 164, spanish: "Como gotas de agua" },
    { text: "Where I'm now? I don't know why", time: 169, spanish: "¿Dónde estoy ahora? No sé por qué" },
    { text: "Nice butterflies in my hands", time: 176, spanish: "Mariposas bonitas en mis manos" },
    { text: "Too much light for twilight", time: 183, spanish: "Demasiada luz para el crepúsculo" },
    { text: "In the mood for the flowers", time: 188, spanish: "Con ánimo para las flores" },
    { text: "TURURURURU", time: 140, spanish: "TURURURURU" },
  ];

  let wakeLock = null;

  async function requestWakeLock() {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('Wake Lock is active');
    } catch (err) {
      console.error(`Failed to acquire wake lock: ${err}`);
    }
  }

  async function releaseWakeLock() {
    if (wakeLock !== null) {
      await wakeLock.release();
      wakeLock = null;
      console.log('Wake Lock has been released');
    }
  }

  //funcion titulo
  // Función para ocultar el título después de 216 segundos
  function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation =
      "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000); // Espera 3 segundos antes de ocultar completamente
  }

  function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
      (line) => time >= line.time && time < line.time + 6
    );

    if (currentLine) {
      var fadeInDuration = 0.1;
      var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

      // Letras en inglés
      lyricsEnglish.style.opacity = opacity;
      lyricsEnglish.innerHTML = currentLine.text;

      // Letras en español
      lyricsSpanish.style.opacity = opacity;
      lyricsSpanish.innerHTML = currentLine.spanish;
    } else {
      lyricsEnglish.style.opacity = 0;
      lyricsEnglish.innerHTML = "";
      lyricsSpanish.style.opacity = 0;
      lyricsSpanish.innerHTML = "";
    }
  }

  audio.addEventListener('play', requestWakeLock);
  audio.addEventListener('pause', releaseWakeLock);
  audio.addEventListener('ended', releaseWakeLock);

  setInterval(updateLyrics, 1000);

  setTimeout(ocultarTitulo, 13000);

  
});

