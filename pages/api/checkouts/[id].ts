export default async (req, res) => {
  const { id } = req.query
  await fetch(`${process.env.apiBaseUrl}/api/checkouts/${id}`, {
    method: "GET",
    headers: {
      "X-PUBLIC-KEY": process.env.RECURRENTE_PUBLIC_KEY,
      "X-SECRET-KEY": process.env.RECURRENTE_SECRET_KEY,
    },
  }).then(function (result) {
    return result.json()
  }).then(function (data) {
    return res.status(200).json(data)
  })
}
