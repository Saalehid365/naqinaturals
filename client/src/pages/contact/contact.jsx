import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import ContactHero from "./contactHero";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaList, FaPhone } from "react-icons/fa";

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [thanks, setThanks] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w3mgbzj",
        "template_zjqwflb",
        form.current,
        "vCfzOEFSfCCoIs4P0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setThanks(true);
          onOpen();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <ContactHero />

      <div className="flex justify-evenly pt-12">
        <div className=" pl-32 pb-28 w-2/5">
          <h2 className="text-xl pb-2">Contact Form</h2>
          <h3 className="text-3xl">Ask Us Anything</h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col pt-12  justify-between"
          >
            <input
              className="border border-gray-500 h-12 mb-6 pl-2"
              placeholder="Your Name here"
              type="text"
              name="user_name"
            ></input>
            <input
              className="border border-gray-500 h-12 mb-6 pl-2"
              placeholder="Subject"
              type="text"
              name="user_subject"
            ></input>
            <input
              className="border border-gray-500 h-12 mb-6 pl-2"
              placeholder="Your Email here"
              type="email"
              name="user_email"
            ></input>
            <textarea
              className="border border-gray-500 h-12 mb-6 pl-2"
              placeholder="Your Message here"
              type="message"
              name="message"
            ></textarea>
            <div>
              <button
                type="submit"
                value="send"
                className="bg-black w-full h-12 text-white text-lg font-semibold"
              >
                Send Mail
              </button>
            </div>
          </form>
        </div>
        <div className="bg-pattern h-96 w-2/5"></div>
      </div>
      {thanks && (
        <>
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent mt={72} height={96}>
              <ModalCloseButton />
              <div className="flex flex-col justify-center items-center h-full font-serif">
                <div className="bg-green-200 h-16 w-16 flex justify-center items-center rounded-full">
                  <FaPhone className="text-3xl text-gray-400" />
                </div>
                <p className="text-5xl pt-4 f">Thank you!</p>
                <p className="text-3xl pt-4">we will be in touch shortly</p>
              </div>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Contact;
