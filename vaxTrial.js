const people = [
  { name: "Sunil", age: 21, temperature: 98 },
  { name: "Biplap", age: 22, temperature: 98 },
  { name: "Rajib", age: 36, temperature: 97.1 },
  { name: "Sadiya", age: 44, temperature: 97.3 },
  { name: "Anika", age: 47, temperature: 98 },
  { name: "Sojib", age: 69, temperature: 97.3 },
  { name: "Jenifer", age: 25, temperature: 97.5 },
  { name: "Jimmy", age: 77, temperature: 97.2 },
  { name: "Aditto", age: 86, temperature: 98 },
  { name: "Sabbir", age: 26, temperature: 101 },
  { name: "Sraboni", age: 46, temperature: 103 },
];

const sortByAge = (ppl) => {
  for (let i = ppl.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (ppl[i].age < ppl[j].age) {
        let temp = ppl[i];
        ppl[i] = ppl[j];
        ppl[j] = temp;
      }
    }
  }
  return ppl;
};

const vaxTrail = (ppl) => {
  const sortedPeople = sortByAge(ppl);
  //   filtering by age---
  const filterdList = {
    A: sortedPeople.filter(
      (item) => item.age > 20 && item.age < 30 && item.temperature < 100
    ),
    B: sortedPeople.filter(
      (item) => item.age > 30 && item.age < 40 && item.temperature < 100
    ),
    C: sortedPeople.filter(
      (item) => item.age > 40 && item.age < 50 && item.temperature < 100
    ),
    D: sortedPeople.filter((item) => item.temperature > 100),
  };
  return filterdList;
};

vaxTrail(people);
