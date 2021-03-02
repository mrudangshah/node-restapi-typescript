import * as Joi from 'joi';

const schema = Joi.object({
  userId: Joi.number()
    .required(),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  isActive: Joi.number()
    .min(0)
    .max(1),
  userLogo: Joi.string()
})

class UserValidator {

  static Validate(requestBody: { userId: any; userName: any; isActive: any; userLogo: any; }) {
    return schema.validateAsync({
      userId: requestBody.userId,
      userName: requestBody.userName,
      isActive: requestBody.isActive,
      userLogo: requestBody.userLogo
    });
  }
}

export { UserValidator };