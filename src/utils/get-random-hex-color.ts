const getRandomHexColor = (): string => {
  const randomNumber = Math.floor(
    Math.random() * Math.pow(16, 6)
  );
  return "#" + randomNumber.toString(16);
};

export default getRandomHexColor;
