const joi=require('joi');

const validator = (schema)=>(req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        console.log(error);
      return res.status(400).send(error.details[0].message);
    }
    next();
};

module.exports={validator};