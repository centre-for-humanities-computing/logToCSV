import { logToCSV }          from "../../lib/sleepExperienceLogger"
import { getRequestDetails } from "../../lib/getRequestDetails"

export default async function (req, res, next) {
  await logToCSV({
    ...req.params,
  }, {
    ...req.body,
  })
    .then(() => res.end())
    .catch(err => res.send(errorResponse(err, req)))
}
function errorResponse(err, req) {
  return {
    type: 'ERROR',
    ...getRequestDetails(req),
    error: {
      ...err
    }
  }
}
