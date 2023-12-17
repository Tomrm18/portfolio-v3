export const useGetImages = () => {
  const getImagePath = (company: string): string => {
    return `/images/${company}.png`;
  };

  return [getImagePath];
};
