const fs = require('fs');

export const useGetImages = () => {
  const getImagePaths = (): string[] => {
    const imgNames: string[] = [];
    const imgPath = `./public/images/`;

    fs.readdirSync(imgPath).forEach((file: any) => {
      imgNames.push(`${imgPath}${file}`);
    });

    return imgNames;
  };

  return [getImagePaths];
};
