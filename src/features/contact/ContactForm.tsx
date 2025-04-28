import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// For now, just simulate submission
		console.log("Form submitted", formData);
		setSubmitted(true);

		// Reset form after submission
		setFormData({
			name: "",
			email: "",
			message: "",
		});

		// we can later replace this with EmailJS or backend API
	};

	return (
		<div className='bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-8'>
			<h2 className='text-2xl font-semibold text-gray-800 mb-4'>Contact Us</h2>

			{submitted ? (
				<p className='text-green-600 font-medium'>
					✅ Message sent! We’ll get back to you soon.
				</p>
			) : (
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label htmlFor='name' className='block text-sm font-medium'>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							required
							value={formData.name}
							onChange={handleChange}
							className='mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
						/>
					</div>

					<div>
						<label htmlFor='email' className='block text-sm font-medium'>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							required
							value={formData.email}
							onChange={handleChange}
							className='mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
						/>
					</div>

					<div>
						<label htmlFor='message' className='block text-sm font-medium'>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							rows={5}
							required
							value={formData.message}
							onChange={handleChange}
							className='mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
						></textarea>
					</div>

					<button
						type='submit'
						className='bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition'
					>
						Send Message
					</button>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
