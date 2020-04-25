import footballData from "@/data";

export const getFootBallResource = () => {
  return Object.values(footballData.data.data.sport)[0].region;
}
