const Joi = require("joi");

const regexLinkImage = /^https?:\/\/[a-z\d.-]+\.[a-z]{2,}(?:\/.*)*$/i;

const nameSchema = Joi.string().min(2).max(30);

const emailSchema = Joi.string().email().required();
const passwordSchema = Joi.string().required();
const numberMovieSchema = Joi.number().required();
const nameMovieSchema = Joi.string().min(2).max(30).required();
const linkSchema = Joi.string()
  .uri({ scheme: ["http", "https"] })
  .regex(regexLinkImage)
  .required();

module.exports = {
  nameSchema,
  emailSchema,
  passwordSchema,
  nameMovieSchema,
  linkSchema,
  numberMovieSchema,
};
