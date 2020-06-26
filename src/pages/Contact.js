import React from "react";
import { Input, TextArea, FormBtn } from "../components/Form";

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="resume" src="assets/img/resume.PNG" alt="resume"></img>
                    <a href="https://docs.google.com/document/d/1qVRYtOzqe7kSTfaMgMAEzNN9SS9mOSn4Yn5JDv8jUws/edit?usp=sharing"><FormBtn>Download resume</FormBtn></a>
                </div>
                <div className="col-md-6">
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
                            Submit
                        </FormBtn>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;