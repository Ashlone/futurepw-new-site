"use client"
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Component({isOpen,onClose}) {
 
  return (
    <>
      
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader>Contact Options</ModalHeader>
          <ModalBody>
            <Button
              block
              icon={<FaPhone />}
              onClick={() => window.open("tel:+27 76 433 2594")}
            >
              Call Us Directly
            </Button>
            <Button
              block
              icon={<FaEnvelope />}
              onClick={() => window.open("mailto:dtmazhawidza@gmail.com")}
            >
              Send an Email
            </Button>
            <Button
              block
              icon={<FaWhatsapp />}
              onClick={() => window.open("https://wa.me/+27764332594")}
            >
              Chat on WhatsApp
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
