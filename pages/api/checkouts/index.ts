export default async (req, res) => {
  await fetch('http://localhost:5000/api/checkouts', {
    method: "POST",
    headers: {
      "X-ACCOUNT-ID": process.env.RECURRENTE_PUBLIC_KEY,
      "X-API-KEY": process.env.RECURRENTE_SECRET_KEY,
      "Content-Type": "application/json",
    }, body: JSON.stringify({
      checkout: {
        price_id: req.body.price_id,
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
