const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const asciiUpperCase = [65, 90];
const asciiLowerCase = [97, 122];

const randomName = (n = 5) => {
  const char = Array(n)
    .fill("")
    .map((value, key) => {
      /* :todo  define a rule for when use vowels or consonants */
      const range = key === 0 ? asciiUpperCase : asciiLowerCase;
      return String.fromCharCode(randomInteger(range[0], range[1]));
    });

  return char.join("");
};

const samples = (n = 5) => {
  const list = document.createElement("ol");
  for (let i = 0; i < n; i++) {
    const li = document.createElement("li");
    li.innerHTML = [
      randomName(randomInteger(5, 10)),
      randomName(randomInteger(3, 15))
    ].join(" ");
    list.appendChild(li);
  }

  return list;
};

document.body.appendChild(samples(10));
