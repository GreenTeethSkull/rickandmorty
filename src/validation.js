
export default function validate (inputs) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexpasswd = /^(?=.*\d).{6,10}$/;
    
    let errors = {};

    if (!regexEmail.test(inputs.email)) {
        errors.email = 'Debe ingresar un correo electronico valido';
    }

    if (!regexpasswd.test(inputs.password)) {
        errors.password = 'Debe contener al menos un número y entre 6 y 10 caracteres';
    }

    return errors;
}