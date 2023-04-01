export const PasswordValidation = {
  UPPERCASE_REGEX: /[a-z]/,
  LOWERCASE_REGEX: /[A-Z]/,
  NUMBER_REGEX: /[0-9]/,
  SPECIAL_CHARACTER_REGEX: /[!@#$%^&*(),.?":{}|<>]/
}

export const EmailValidation = {
  EMAIL_REGEX: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)/
}