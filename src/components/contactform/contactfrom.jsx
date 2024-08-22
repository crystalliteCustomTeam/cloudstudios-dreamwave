"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
            // Fetch IP data
            const ipResponse = await axios.get('https://ipwho.is/');
            const ipData = ipResponse.data;

            // Combine form data with additional info
            const combinedData = {
                ...data,
                "IP": `ipAddress : ${ipData.ip} - Country : ${ipData.country} - City : ${ipData.city} - ZipCode : ${ipData.postal}`,
                "Brand": "Cloud Studios",
                "Page": `${currentRoute}`,
                "Date": currentdate,
                "JSON": data,
            };

            // Send data to SheetDB
            await axios.post('https://sheetdb.io/api/v1/gf8bsy1mbvfr5', combinedData);

            // Send email via custom API
            await axios.post('/api/emailapi', combinedData);

            // Prepare HubSpot API data
            const hubSpotData = {
                fields: [
                    { name: "email", value: data.email },
                    { name: "firstname", value: data.name },
                    { name: "phone", value: data.phone },
                    { name: "message", value: data.msg },
                    { name: "ip_country_code", value: ipData.ip },
                    { name: "website", value: window.location.href },
                    { name: "company", value: "Cloud Studios" },
                ],
            };

            // Send data to HubSpot API
            await axios.post(
                'https://api.hsforms.com/submissions/v3/integration/submit/47083847/011ef447-7771-4b56-8014-8004c3cdcc51',
                hubSpotData
            );

            // Redirect to thank-you page
            window.location.href = '/thank-you';

        } catch (error) {
            console.error("Form submission error:", error);
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
                            required: "The Name field is required",
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
                            required: "The Email field is required",
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
                            required: "The Phone field is required",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Mobile number can only contain digits"
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
                    <p>By continuing you agree to the Cloud Studios Inc Privacy Policy and consent to receive communications from us.</p>
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
