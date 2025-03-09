import React, { JSX } from "react";
import {
  Button,
  CloseButton,
  Dialog,
  For,
  HStack,
  Portal,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

interface TypesOfWaterproofingPopupProps {
  open: boolean;
  handleOpen: (icon: string, heading: string, description: string) => void;
  imageSrc?: string;
  imageAlt?: string;
  content?: React.ReactNode;
}

function TypesOfWaterproofingPopup({
  open,
  handleOpen,
  imageSrc,
  imageAlt = "Waterproofing illustration",
  content,
}: TypesOfWaterproofingPopupProps): JSX.Element {
  return (
     <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog>
  );
}

export default TypesOfWaterproofingPopup;
