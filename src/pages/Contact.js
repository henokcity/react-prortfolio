import React from "react";
import { Input, TextArea, FormBtn } from "../components/Form";

function Contact() {
    return (
        <form>
            <Input
                name="name"
                placeholder="Full name"
            />
            <Input
                name="email"
                placeholder="email"
            />
            <TextArea
                name="text"
                placeholder="Fill free to leave short Massege"
            />
            <FormBtn>
                Submit Book
              </FormBtn>
        </form>
    );
}

export default Contact;