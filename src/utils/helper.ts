const questionWheel = ["flag", "capital", "population", "region", "cioc"];

export function formatQuestions(data: any) {
  data = data.filter((country) => country.cioc !== "ISR");

  const questions: Array<object> = [];
  for (let i = 0; i < 10; i++) {
    // four random countries
    const countries = [
      data[Math.floor(Math.random() * data.length)],
      data[Math.floor(Math.random() * data.length)],
      data[Math.floor(Math.random() * data.length)],
      data[Math.floor(Math.random() * data.length)],
    ];

    // chose random number for question
    const questionIs = Math.floor(Math.random() * questionWheel.length);

    // get question
    const randomQuestion = questionWheel[questionIs];

    const chosenCountryIndex = Math.floor(Math.random() * countries.length);
    const chosenCountry = countries[chosenCountryIndex];
    const questionText = questionParagraph(randomQuestion, chosenCountry);
    questions.push({
      chosenCountryIndex,
      countries,
      question: questionText,
    });
  }
  return questions;
}

function questionParagraph(question: string, country: any) {
  switch (question) {
    case "flag":
      return `Which country does this ${question} ${country[question]} belongs to`;
    case "capital":
      return `Which country have this ${question} "${country[question]}"`;
    case "population":
      return `Which country has a ${question} of ${country[question]}?`;
    case "region":
      return `....... is country in this region "${country[question]}" and have population of ${country["population"]}`;
    case "cioc":
      if (country.cioc) return `${country[question]} is short hand for.......`;
      else
        return `Which country does this ${question} ${country["flag"]} belongs to`;
    default:
      return "Failed to get question format";
  }
}
