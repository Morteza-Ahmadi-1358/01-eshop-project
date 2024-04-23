import React, { useRef, useState } from 'react'
import { Button, Form, Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap'
import * as usersRepo from '@/repository/usersRepository'

const login = (props) => {
    const username = useRef()
    const password = useRef()
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        const result = props.allUsers.filter(user => {
            return (
                user.username === username.current.value
                &&
                user.password === password.current.value
            )
        })
        if (result.length === 1)
            setToastMessage('ورود موفقیت‌آمیز بود')
        else
            setToastMessage('ورود ناموفق')
        setShowToast(true)
    }
    return (
        <div className='w-50 mx-auto my-2'>
            <h6 className='form-control w-75 mx-auto py-5 text-center fw-bold bg-primary text-white'>فرم ورود</h6>
            <Form onSubmit={submitHandler} className='form-control w-75 mx-auto text-primary border-primary'>
                <Form.Label className='my-3'>نام کاربری</Form.Label>
                <Form.Control type='text' ref={username} className='text-left' />
                <Form.Label className='my-3'>کلمه عبور</Form.Label>
                <Form.Control type='password' ref={password} />
                <Button type='submit' variant='primary' className='d-block w-100 my-3'>ورود</Button>
            </Form>
            <ToastContainer position='middle-center'>
                <Toast show={showToast} autohide={true} delay={5000} onClose={() => setShowToast(false)}>
                    <ToastHeader className='text-danger py-3'>نتیجه لاگین</ToastHeader>
                    <ToastBody className='text-success my-5 py-5 text-center fw-bold'>{toastMessage}</ToastBody>
                </Toast>
            </ToastContainer>
        </div>
    )
}

export default login

export async function getServerSideProps() {
    return {
        props: {
            allUsers: JSON.parse(usersRepo.GET())
        }
    }
}