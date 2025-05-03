window.translations = {
    en: {
        correct: "Correct!",
        wrong: "Wrong!",
      finished: "You're done! Great work!",
      toggleLabel: "Svenska",
      title: "SCAVANGER HUNT",
      question1: "What language is spoken in the country famous for croissants, baguettes, and the Eiffel Tower?",
    answer1: "French",
    answer2: "Spanish",
    answer3: "Norwegian or German",
    question2: "What are the colors of the EU flag?",
  answer1_q2: "Rainbow",
  answer2_q2: "Blue and Yellow",
  answer3_q2: "Red and Green",
  question3: 'What does "EU" stand for?',
  answer1_q3: 'European Union',
  answer2_q3: 'Elephants United',
  answer3_q3: 'Entertainment Universe',
  question4: 'What does the word "Union" in "European Union (EU)" mean?',
  answer1_q4: 'Joy',
  answer2_q4: 'Alliance',
  answer3_q4: 'Adventure',
  question5: 'What does a green pedestrian light mean across Europe?',
  answer1_q5: 'Stop and spin',
  answer2_q5: 'Walk',
  answer3_q5: 'Dance',
  question6: 'Which toy comes from Denmark, an EU country?',
  answer1_q6: 'Barbie',
  answer2_q6: 'LEGO',
  answer3_q6: 'Nintendo',
  question7: 'What music is the official anthem of the EU?',
  answer1_q7: 'Dancing Queen',
  answer2_q7: 'Ode to Joy',
  answer3_q7: 'Bara bada bastu',
  question8: 'Which animals live in and around Lake Munksjön?',
  answer1_q8: 'Dolphins',
  answer2_q8: 'Ducks',
  answer3_q8: 'Dragons'
    },
    sv: {
      correct: "Grymt! Nästa fråga kommer!",
      wrong: "Fel!",
      finished: "Du är klar! Bra jobbat!",
      toggleLabel: "English",
      title: "SKATT JAKT",
      question1: "Vilket språk talas i landet som är känt för croissanter, baguetter och Eiffeltornet?",
    answer1: "Franska",
    answer2: "Spanska",
    answer3: "Norska eller tyska",
    question2: "Vilka färger har EU-flaggan?",
  answer1_q2: "Regnbågsfärger",
  answer2_q2: "Blå och gul",
  answer3_q2: "Röd och grön",
  question3: 'Vad står "EU" för?',
  answer1_q3: 'Europeiska unionen',
  answer2_q3: 'Elefanter United',
  answer3_q3: 'Underhållningsuniversum',
  question4: 'Vad betyder ordet "Union" i "Europeiska unionen (EU)"?',
  answer1_q4: 'Glädje',
  answer2_q4: 'Allians',
  answer3_q4: 'Äventyr',
  question5: 'Vad betyder ett grönt gångljus i Europa?',
  answer1_q5: 'Stanna och snurra',
  answer2_q5: 'Gå',
  answer3_q5: 'Dans',
question6: 'Vilken leksak kommer från Danmark, ett EU-land?',
  answer1_q6: 'Barbie',
  answer2_q6: 'LEGO',
  answer3_q6: 'Nintendo',
  question7: 'Vilken musik är EU:s officiella hymn?',
  answer1_q7: 'Dancing Queen',
  answer2_q7: 'Ode to Joy',
  answer3_q7: 'Bara bada bastu',
  question8: 'Vilka djur lever i och runt sjön Munksjön?',
  answer1_q8: 'Delfiner',
  answer2_q8: 'Ankor',
  answer3_q8: 'Drakar'
    }
  };

  window.currentLang = localStorage.getItem("lang") || "en";

  window.setLanguage = function (lang) {
    window.currentLang = lang;
    localStorage.setItem("lang", lang);
    document.dispatchEvent(new CustomEvent("languageChange"));
  };

  window.translate = function (key) {
    return translations[currentLang][key] || key;
  };

  window.dispatchEvent(new Event('i18nReady'));
