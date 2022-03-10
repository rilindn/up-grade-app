const device = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const breakpoints = (condition) => {
  return {
    mobileS: `(${condition}-width: ${device.mobileS})`,
    mobileM: `(${condition}-width: ${device.mobileM})`,
    mobileL: `(${condition}-width: ${device.mobileL})`,
    tablet: `(${condition}-width: ${device.tablet})`,
    laptop: `(${condition}-width: ${device.laptop})`,
    laptopL: `(${condition}-width: ${device.laptopL})`,
    desktop: `(${condition}-width: ${device.desktop})`,
  };
};

export default breakpoints;
