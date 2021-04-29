export default async (req, res) => {
  await fetch(`${process.env.apiBaseUrl}/api/checkouts`, {
    method: "POST",
    headers: {
      "X-PUBLIC-KEY": process.env.RECURRENTE_PUBLIC_KEY,
      "X-SECRET-KEY": process.env.RECURRENTE_SECRET_KEY,
      "Content-Type": "application/json",
    }, body: JSON.stringify({
      checkout: {
        prices: [req.body.price_id],
        success_url: req.body.success_url,
        cancel_url: req.body.cancel_url
      }
    })
  }).then(function (result) {
    return result.json()
  }).then(function (data) {
    return res.status(200).json(data)
  })
}
