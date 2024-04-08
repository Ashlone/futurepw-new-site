"use client"
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const TeamCard = ({ name, title, bio, image }: TeamMember) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Card className="py-4">
        <CardBody className="overflow-visible py-2">
        {image && (
            <Image
              alt={name}
              className="object-cover rounded-xl w-full h-[500px]"
              src={image}
              width={"100%"}
            />
          )}
          <p className="mt-5 text-tiny uppercase font-bold">{title}</p>
          <h4 className="font-bold text-large">{name}</h4>
          <Button
            className="bg-[#E8C316] mt-5"
            size="sm"
            onClick={handleOpenModal}
          >
            Read Bio
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={handleCloseModal}>
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalBody style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <p>{bio}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TeamCard;




