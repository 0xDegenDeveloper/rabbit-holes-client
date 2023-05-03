import sample from "../../assets/sample-data.json";

export default function fetchRabbitData(rabbitId) {
  for (const key in sample) {
    if (sample.hasOwnProperty(key)) {
      const rabbits = sample[key].rabbits;

      for (let i = 0; i < rabbits.length; i++) {
        if (parseInt(rabbits[i].id) == parseInt(rabbitId)) {
          return rabbits[i];
        }
      }
    }
  }
  return sample[0].rabbits[0];
}
