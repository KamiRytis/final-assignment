import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import PostContext from '../../contexts/PostContext';
import UserContext from '../../contexts/UserContext';

const AddPost = () => {
    const [values] = useState({
        title: '',
        content: ''
    })

    const {addPost}=useContext(PostContext)
    const {loggedInUser}=useContext(UserContext)

    const navigation = useNavigate();

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("This field must be filled.")
            .min(15, "Question title must be longer than 15 characters"),
        content: Yup.string()
            .required("This field must be filled.")
            .min(20, "Question must be longer than 20 characters")
    });

    const handleSubmit = (values) => {
        let newPost = {
            postId: Date.now(),
            userId: loggedInUser.id,
            title: values.title,
            content: values.content,
            edited: false,
            numOfLikes:0
        }
        addPost(newPost)
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
                    <h1>Post Your Question</h1>
                    <label>Title:
                            <Field
                                name='title'
                                value={values.title}
                                onChange={(e) => setValues({ ...values, title: e.target.value })}
                            />
                            {
                                errors.title && touched.title ?
                                    <span>{errors.title}</span>
                                    : null
                            }
                        </label>
                        <label>Question:
                            <Field
                                name='content'
                                value={values.content}
                                onChange={(e) => setValues({ ...values, content: e.target.value })}
                            />
                            {
                                errors.content && touched.content ?
                                    <span>{errors.content}</span>
                                    : null
                            }
                        </label>
                    <button type="submit">submit</button>
                </Form>
                )}
            </Formik>
        </>
    );
}

export default AddPost;