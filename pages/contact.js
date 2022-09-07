import ContactForm from "../components/contact/contact-form";
import Head from 'next/head'
import { Fragment } from "react";

export default function Contact(params) {
    return(
<Fragment>
    <Head>
        <title>Contactame</title>
        <meta name='contact' content="Contactame "></meta>
    </Head>
<ContactForm/>
</Fragment>
    )
}