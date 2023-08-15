export const useColorType = (type) => {
  const colors = {
    bug: "#91c12f",
    dark: "#5a5465",
    dragon: "#0b6dc3",
    electric: "#eed535",
    fairy: "#ec8fe6",
    fighting: "#e12c6a",
    fire: "#fd7d24",
    flying: "#8fa9de",
    ghost: "#5269ad",
    grass: "#63bc5a",
    ground: "#d97845",
    ice: "#73cec0",
    normal: "#929da3",
    poison: "#aa6bc8",
    psychic: "#fa7179",
    rock: "#c5b78c",
    steel: "#5a8ea2",
    water: "#5090d6",
  };

  if (colors.hasOwnProperty(type)) {
    return colors[type];
  } else {
    return "";
  }
};
