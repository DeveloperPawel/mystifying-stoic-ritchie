interface Dict {
  [key: string]: string;
}

export const states: Dict = {
  AZ: "0.056",
  ARIZONA: "0.056",
};

export const CalculateTax = (subtotal: number, state: string) => {
  let number: number = 0;
  let formatedState = state.toUpperCase();

  if (states[formatedState]) {
    number = parseFloat(states[formatedState]);
  }

  return subtotal * number;
};
