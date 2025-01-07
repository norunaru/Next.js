export default function handler(req, res) {
  const date = new Date();
  console.log(date.getDate);
  res.status(200).json(date);
}
