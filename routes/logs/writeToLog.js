import { logToCSV }          from "../../lib/sleepExperienceLogger"
import { getRequestDetails } from "../../lib/getRequestDetails"

export default async function (req, res, next) {
  await logToCSV({
    ...req.body,
    ...req.params,
  })
    .then(() => res.end())
    .catch(err => res.send(errorResponse(err)))
}
function errorResponse(err) {
  return {
    type: 'ERROR',
    ...getRequestDetails(req),
    error: {
      ...err
    }
  }
}
