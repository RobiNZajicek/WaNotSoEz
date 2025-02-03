export const calcAge = (birthYear: number): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };
  
