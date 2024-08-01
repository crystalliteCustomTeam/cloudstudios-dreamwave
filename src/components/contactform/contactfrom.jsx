import { ArrowMenu } from "@/src/app-constants"
import styles from "@/styles/components/contactfrom.module.scss"
import { Form } from "react-bootstrap"

const ContactForm = ({ callbtn }) => {
    return (
        <Form>
            <div className={styles.contactForm}>
                <div className={styles.input}>
                    <input type="text" name='name' placeholder='Full Name' required />
                </div>
                <div className={styles.input}>
                    <input type="email" name='email' placeholder='Email Address' required />
                </div>
                <div className={styles.input}>
                    <input type="tel" name='phone' placeholder='Mobile Number' required />
                </div>
                <div className={styles.textarea}>
                    <textarea name="msg" placeholder='Message'></textarea>
                </div>
                <div className={styles.contactTxt}>
                    <p>By continuing you agree to the Explainly Privacy Policy and consent to receive communications from us.</p>
                </div>
                <div className={styles.contactSubmit}>
                    <button type="submit" className={styles.submitBtn}>Submit <ArrowMenu /></button>
                    {callbtn !== "no" ?
                        <div className={styles.bookCall}>Book A Call</div>
                        :
                        ""
                    }
                </div>
            </div>
        </Form>
    )
}

export default ContactForm