import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";

import AstronautAnimation from "../../assets/animations/astronaut.json";
import SuccessAnim from "../../assets/animations/success.json";   // <-- Add your success animation

// ------------------- STYLES -------------------

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0 80px 0;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
font-size: 42px;
font-weight: 600;
margin-bottom: 20px;
color: ${({ theme }) => theme.text_primary};
text-align: center;
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: 0.2s;
  cursor: text;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: 0.2s;
  cursor: text;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: wait;   /* loading cursor */
  }
`;

const AnimationWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 130px;

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 20px;
  }
`;

// ------------------- COMPONENT -------------------

const Contact = () => {

  const [sending, setSending] = React.useState(false);  // loading state
  const [success, setSuccess] = React.useState(false);  // show animation
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      'service_2utykms',
      'template_nqq8c32',
      form.current,
      'dHayEa-gSE_bCsuHp'
    )
    .then(() => {
        setSending(false);
        setSuccess(true); // show success animation
        form.current.reset();

        setTimeout(() => setSuccess(false), 2000); // hide popup
    })
    .catch(() => {
        setSending(false);
    });
  };

  return (
    <Container>

      {/* SUCCESS POPUP */}
      {success && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10000
        }}>
          <Lottie animationData={SuccessAnim} style={{ width: 200, height: 200 }} />
        </div>
      )}

      <Wrapper>

        {/* LEFT — ASTRONAUT */}
        <AnimationWrapper>
          <Lottie
            animationData={AstronautAnimation}
            loop={true}
            style={{ width: "100%", maxWidth: "460px" }}
          />
        </AnimationWrapper>

        {/* RIGHT — CONTACT FORM */}
        <div style={{ width: "50%" }}>
          <Title>Contact</Title>

          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>

            <ContactInput placeholder="Your Email" name="from_email" />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" rows="4" name="message" />

            <ContactButton
              type="submit"
              value={sending ? "Sending..." : "Send"}
              disabled={sending}
            />
          </ContactForm>
        </div>

      </Wrapper>
    </Container>
  );
};

export default Contact;
