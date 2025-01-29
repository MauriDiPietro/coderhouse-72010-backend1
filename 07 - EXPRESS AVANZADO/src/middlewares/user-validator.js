export const userValidator = (req, res, next) => {
  if (
    req.body.email === undefined ||
    typeof req.body.email !== "string" ||
    req.body.password === undefined ||
    typeof req.body.password !== "string" ||
    req.body.age === undefined ||
    typeof req.body.age !== "number"
  )
    res.status(404).json({ error: "Invalid body" });
  return next();
};

// ---> POST /users --> userValidator
//                    |ERROR| |next()|
//                                  |__>  createUser()
