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

interface ComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const Component: React.FC<ComponentProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader>Contact Options</ModalHeader>
          <ModalBody>
            <Button
              onClick={() => window.open("tel:+27 76 433 2594")}
            >
              <FaPhone /> Call Us Directly
            </Button>
            <Button
              onClick={() => window.open("mailto:dtmazhawidza@gmail.com")}
            >
              <FaEnvelope /> Send an Email
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/+27764332594")}
            >
              <FaWhatsapp /> Chat on WhatsApp
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
};

export default Component;
