import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [values] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        avatar: ''
    })

    const navigation = useNavigate();

    const { users, setLoggedInUser, addNewUser } = useContext(UserContext);

    const validationSchema = Yup.object().shape({
        userName: Yup.string()
            .required("This field must be filled.")
            .test('unique username', "User with this username already exists", (value) => !users.find(user => user.userName === value)),
        email: Yup.string()
            .required("This field must be filled.")
            .email("You must enter a valid email")
            .test('unique email', "User with this email already exists", (value) => !users.find(user => user.email === value)),
        password: Yup.string()
            .required("This field must be filled.")
            .min(8, 'Password must be at least 8 symbols length.'),
        confirmPassword: Yup.mixed()
            .required("This field must be filled.")
            .oneOf([Yup.ref('password'), null], "Passwords must match"),
        avatar: Yup.string()
            .url("must be a valid URL address")
            .required("This field must be filled."),
    });

    const handleSubmit = (values) => {
        let newUser = {
            userName: values.userName,
            email: values.email,
            password: values.password,
            avatar: values.avatar,
            id: Date.now(),
        }
        setLoggedInUser(newUser)
        addNewUser(newUser)
        navigation("/");
    }

    return (
        <>
            <Formik
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ errors, touched, values, setValues }) => (
                    <Form className='userForm'>
                        <h1>Please, Register</h1>
                        <label>Username:
                            <Field
                                name='userName'
                                value={values.userName}
                                onChange={(e) => setValues({ ...values, userName: e.target.value })}
                            />
                            {
                                errors.userName && touched.userName ?
                                    <span>{errors.userName}</span>
                                    : null
                            }
                        </label>
                        <label>Email:
                            <Field
                                name='email'
                                value={values.email}
                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                            />
                            {
                                errors.email && touched.email ?
                                    <span>{errors.email}</span>
                                    : null
                            }
                        </label>
                        <label>password:
                            <Field
                                name='password'
                                value={values.password}
                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                            />
                            {
                                errors.password && touched.password ?
                                    <span>{errors.password}</span>
                                    : null
                            }
                        </label>
                        <label>Confirm Password:
                            <Field
                                name='confirmPassword'
                                value={values.confirmPassword}
                                onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
                            />
                            {
                                errors.confirmPassword && touched.confirmPassword ?
                                    <span>{errors.confirmPassword}</span>
                                    : null
                            }
                        </label>
                        <label>Avatar:
                            <Field
                                name='avatar'
                                value={values.avatar}
                                onChange={(e) => setValues({ ...values, avatar: e.target.value })}
                            />
                            {
                                errors.avatar && touched.avatar ?
                                    <span>{errors.avatar}</span>
                                    : null
                            }
                        </label>
                        <button type='submit'>Register</button>
                    </Form>
                )}
            </Formik>
        </>);
}

export default Register;