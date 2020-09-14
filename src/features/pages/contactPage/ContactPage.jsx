import { Field, Form, Formik } from 'formik';
import React from 'react';
import styles from './ContactPage.module.css';
import * as Yup from 'yup';
import Button from '../../UI/buttons/Button';

export default function ContactPage() {
	return (
		<div className={styles.ContactPage}>
			<div className={styles.ContactContent}>
				<h2>Contact me</h2>
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
			</div>
		</div>
	);
}
