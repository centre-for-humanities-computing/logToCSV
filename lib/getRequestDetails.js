export function getRequestDetails(req, flat) {
  const details = {
    timestamp: Date.now(),
    method: req.method,
    url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    body: req.body
  }
  if (flat) {
    Object.entries(req.headers)
      .forEach(([name, value]) => {
        details[`headers__${name}`] = value
      })

  } else {
    details.headers = req.headers
  }
  return details
}
