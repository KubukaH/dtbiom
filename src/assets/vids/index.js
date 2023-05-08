import typing from "./typing.mp4";

const vids = [
  {
    name: "typing-hero",
    vid: typing
  }
];

const getVidByName = (name) => {
  return vids.find(x => x.name === name);
}

export { vids, getVidByName };