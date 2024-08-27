"use client";
import { useState, useEffect } from 'react';
import { Boxes } from '../ui/background-boxes';
import { Button } from '../ui/button';
import Navbar from '../Navbar';
import { useSession } from 'next-auth/react';

function Connect() {
    const { data: session } = useSession();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [lastSubmitted, setLastSubmitted] = useState(null); // Track last submission time
    const [cooldownTime, setCooldownTime] = useState(0); // Cooldown timer in seconds
    const cooldownPeriod = 30 * 1000; // 30 seconds cooldown period

    useEffect(() => {
        if (lastSubmitted) {
            const interval = setInterval(() => {
                const elapsed = Date.now() - lastSubmitted;
                const remaining = Math.max(0, Math.ceil((cooldownPeriod - elapsed) / 1000));
                setCooldownTime(remaining);

                if (remaining === 0) {
                    clearInterval(interval);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [lastSubmitted]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (loading) {
            setError('Please wait before submitting again.');
            return;
        }

        const now = Date.now();
        if (lastSubmitted && (now - lastSubmitted < cooldownPeriod)) {
            setError(`You must wait ${cooldownTime} seconds before submitting again.`);
            return;
        }

        // Validate form data
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            setError('All fields are required.');
            return;
        }

        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Invalid email format.');
            return;
        }

        setLoading(true); // Set loading to true when submission starts

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess('Form submitted successfully.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                });
                setLastSubmitted(now); // Update last submission time
            } else {
                setError(data.error || 'Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('Failed to submit the form. Please try again later.');
        } finally {
            setLoading(false); // Reset loading state in finally block
        }
    };

    return (
        <>
            <Navbar out={!session} />

            <div className="h-screen overflow-hidden relative w-full isolate bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
                <Boxes className={'-z-50'} />
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-100">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-100">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="block w-full outline-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-100">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block outline-none w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-100">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block outline-none w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    {error && (
                        <div className="mt-4 text-red-600">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mt-4 text-green-400">
                            {success}
                        </div>
                    )}
                    <div className="mt-10">
                        <Button asChild>
                            <button
                                type="submit"
                                disabled={loading || (lastSubmitted && cooldownTime > 0)}
                                className={`w-full ${loading || cooldownTime > 0 ? 'bg-gray-500' : 'bg-gray-100 hover:bg-gray-300'}`}
                            >
                                {loading ? 'Submitting...' : (lastSubmitted && cooldownTime > 0 ? `${cooldownTime}s` : `Let's talk`)}
                            </button>
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Connect;