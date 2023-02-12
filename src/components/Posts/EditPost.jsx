import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostContext from "../../contexts/PostContext";
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

const EditPost = () => {
    const {id}= useParams();

    const {posts, editPost}=useContext(PostContext);

    const currentPost = posts.find(post=>post.id.toString() === id)

    const navigation =useNavigate();

    const [formInputs]=useState({
        title:currentPost.title,
        content: currentPost.content
    })

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("This field must be filled.")
            .min(15, "Question title must be longer than 15 characters"),
        content: Yup.string()
            .required("This field must be filled.")
            .min(20, "Question must be longer than 20 characters")
    });

    const handleSubmit =(values)=>{
        const updatedPost={
            title:values.title,
            content:values.content,
            edited:true
        }
        editPost(id, updatedPost);
        navigation("/");
    }

    return ( 
    <>
        <Formik
                initialValues={formInputs}
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
 
export default EditPost;