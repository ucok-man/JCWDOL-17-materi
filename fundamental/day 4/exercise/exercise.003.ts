/*
● Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
● Return values :
    ○ < 18.5 return “less weight”
    ○ 18.5 - 24.9 return “ideal”
    ○ 25.0 - 29.9 return “overweight”
    ○ 30.0 - 39.9 return “very overweight”
    ○ > 39.9 return “obesity”z
*/

function bmicalc(weight: number, height: number): string {
  const bmi = weight / height ** 2; // ** operator = pangkat
  let category: string;

  switch (true) {
    case bmi < 18.5:
      category = "less weight";
      break;
    case bmi >= 18.5 && bmi <= 24.9:
      category = "ideal";
      break;
    case bmi >= 25.0 && bmi <= 29.9:
      category = "overweight";
      break;
    case bmi >= 30.0 && bmi <= 39.9:
      category = "very overweight";
      break;
    default:
      category = "obesity";
  }

  return category;
}

console.log(bmicalc(50, 170));
