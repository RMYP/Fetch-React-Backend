const joi = require("joi");

const validator = (schema) => (payload) => {
    const {error, value} = schema.validate(payload, {abortEarly: false});
    return {error, value}
}

const carsInputSchema = joi.object({
    manufacture: joi.string().required(), 
    model: joi.string().required(), 
    rentPerDay: joi.number().required(), 
    carSize: joi.string().default("Small").required(), 
    capacity: joi.number().required(), 
    year: joi.number().required(), 
    updatedAt: new Date(),
    createdAt: new Date()
})

const carUpdateSchema = joi.object({
    manufacture: joi.string(), 
    model: joi.string(), 
    rentPerDay: joi.number(), 
    carSize: joi.string(), 
    capacity: joi.number(), 
    year: joi.number(), 
    description: joi.string(),
    updatedAt: new Date()
})

const validateCreateInput = validator(carsInputSchema)
const validateUpdateInput = validator(carUpdateSchema)

module.exports = {validateCreateInput, validateUpdateInput}