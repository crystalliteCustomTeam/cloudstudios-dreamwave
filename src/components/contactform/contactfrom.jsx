"use client"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { usePathname } from "next/navigation"
import { ArrowMenu } from "@/src/app-constants";
import styles from "@/styles/components/contactfrom.module.scss";

const ContactForm = ({ callbtn }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        mode: "onChange",
    });
    const [loading, setLoading] = useState(false);
    const router = usePathname();
    const currentRoute = router;
    const currentdate = new Date().toLocaleString();

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const ipResponse = await axios.get('https://ipwho.is/');
            const ipData = ipResponse.data;
            const combinedData = {
                ...data,
                "IP": `ipAddress : ${ipData.ip} - Country : ${ipData.country} - City : ${ipData.city} - ZipCode : ${ipData.postal}`,
                "Brand": "Cloud Studios Team",
                "Page": `${currentRoute}`,
                "Date": currentdate,
                "JSON": data,
            };

            await axios.post('https://sheetdb.io/api/v1/gf8bsy1mbvfr5', combinedData);
            await axios.post('/api/emailapi', combinedData);

            const { pathname } = router;
            if (pathname == pathname) {
                window.location.href = '/thank-you';
            }

        } catch (error) {
            console.error("Form submission error:", error);
            //  alert('There was an error submitting the form. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.contactForm}>
                <div className={styles.input}>
                    <input
                        type="text"
                        {...register('name', {
                            required: "This field is required",
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: "Name can only contain letters"
                            }
                        })}
                        placeholder='Full Name'
                    />
                    {errors.name && <span className={styles.errorStyle}>{errors.name.message}</span>}
                </div>
                <div className={styles.input}>
                    <input
                        type="email"
                        {...register('email', {
                            required: "This field is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            }
                        })}
                        placeholder='Email Address'
                    />
                    {errors.email && <span className={styles.errorStyle}>{errors.email.message}</span>}
                </div>
                <div className={styles.input}>
                    <input
                        type="tel"
                        {...register('phone', {
                            required: "This field is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Phone number must be 10 digits"
                            }
                        })}
                        placeholder='Mobile Number'
                    />
                    {errors.phone && <span className={styles.errorStyle}>{errors.phone.message}</span>}
                </div>
                <div className={styles.textarea}>
                    <textarea {...register('msg')} placeholder='Message'></textarea>
                </div>
                <div className={styles.contactTxt}>
                    <p>By continuing you agree to the Explainly Privacy Policy and consent to receive communications from us.</p>
                </div>
                <div className={styles.contactSubmit}>
                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting || loading}>
                        {loading ? 'Submitting...' : <>Submit <ArrowMenu /></>}
                    </button>
                    {callbtn !== "no" &&
                        <div className={styles.bookCall}>Book A Call</div>
                    }
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
