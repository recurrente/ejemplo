export default async (req, res) => {
  const { id } = req.query
  await fetch(`http://localhost:5000/api/checkouts/${id}`, {
    method: "GET",
    headers: {
      "X-ACCOUNT-ID": process.env.RECURRENTE_PUBLIC_KEY,
      "X-API-KEY": process.env.RECURRENTE_SECRET_KEY,
    },
  }).then(function (result) {
    return result.json()
  }).then(function (data) {
    return res.status(200).json(data)
  })
}
