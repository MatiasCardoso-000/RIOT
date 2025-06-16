export const validateSchema = (schema) => (req, _res, next) => {
  schema.parse(req.body);
  next()
};
