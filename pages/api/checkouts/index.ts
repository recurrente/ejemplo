export default async (req, res) => {
  await fetch(`${process.env.apiBaseUrl}/api/checkouts`, {
    method: "POST",
    headers: {
      "X-PUBLIC-KEY": process.env.RECURRENTE_PUBLIC_KEY,
      "X-SECRET-KEY": process.env.RECURRENTE_SECRET_KEY,
      "Content-Type": "application/json",
    }, body: JSON.stringify({
      checkout: {
        prices: req.body.prices,
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
      }
    })
  }).then(function (result) {
    return result.json()
  }).then(function (data) {
    return res.status(200).json(data)
  })
}
