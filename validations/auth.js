import { body } from "express-validator"


export const registerValidation = [
    body('email','Неверный формат почты').isEmail(),
    body('password','Пароль должен содержать минимум 1 символ').isLength({ min: 1 }),
    body('fullName','Имя должно содержать минимум 1 символ').isLength({ min: 1 }),
]

export const loginVadidation = [
    body('email','Неверный формат почты').isEmail(),
    body('password','Пароль должен быть минимум 1 символ').isLength({min:1}),
]
