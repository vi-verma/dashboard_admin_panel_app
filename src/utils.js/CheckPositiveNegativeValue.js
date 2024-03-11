export const CheckPositiveNegativeValue = (value) => {
  const sign = (value && value < 0 &&  `- ${value}`) || value || ''
  return sign;
};
