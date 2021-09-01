/**
 * req is an instance of http.IncomingMessage
 * res is an instance of http.ServerResponse
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
export default function handler(req, res) {
  res.status(200).json({ text: "hello" });
}
