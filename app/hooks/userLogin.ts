
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
    username: yup
        .string()
        .required('El nombre de usuario es requerido'),
    password: yup
        .string()
        .min(4, ({ min }) => `La contraseña debe tener minimo ${min} caracteres`)
        .required('La contraseña es requerida'),
})

export default loginValidationSchema