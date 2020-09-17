import { Field, Form, Formik } from 'formik';
import React from 'react';
import styles from './ContactPage.module.css';
import * as Yup from 'yup';
import Button from '../../UI/buttons/Button';
import { BsArrowBarUp } from 'react-icons/bs';
import { animateScroll as scroll } from 'react-scroll';

export default function ContactPage() {
	function scrollToTop() {
		scroll.scrollToTop();
	}
	return (
		<div className={styles.ContactPage} id='contact'>
			<div className={styles.ContactContent}>
				<h1>Contact me</h1>
				<p>Ipsum anim sit dolore id veniam.</p>
				<Formik
					initialValues={{ name: '', email: '', phoneNumber: '', message: '' }}
					validationSchema={Yup.object({
						name: Yup.string().required(),
						email: Yup.string().email(),
						message: Yup.string().required().min(10),
					})}
					onSubmit={(values) => console.log(values)}
				>
					{({ isSubmitting, isValid, dirty, errors }) => (
						<Form>
							<div className={styles.FormContent}>
								<div className={styles.ContactFields}>
									<Field name='name' type='text' placeholder='Name' />
									<Field name='email' type='email' placeholder='Email' />
									<Field name='phoneNumber' type='text' placeholder='Phone Number' />
									{errors.email && <p style={{ margin: '0' }}>enter valid email</p>}
								</div>
								<div className={styles.ContactTextarea}>
									<textarea name='message' type='textarea' placeholder='Message' />
								</div>
							</div>
							<Button>Submit Message</Button>
						</Form>
					)}
				</Formik>
				<BsArrowBarUp className={styles.BackToTopBtn} onClick={scrollToTop} />
			</div>
		</div>
	);
}
