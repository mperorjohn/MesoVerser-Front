import React from "react";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiMailSendLine } from "react-icons/ri";
import { useToast } from "@chakra-ui/react";

const Footer = () => {
  const OfficeAddress = [
    {
      Location: "Nigeria",
      Address: "45 Lagos Road, Abuja, FCT",
    },
    {
      Location: "Canada",
      Address: "123 Maple Street, Toronto, ON",
    },
    {
      Location: "United Kingdom",
      Address: " 7 Primrose Lane, London, SW1A 1AA",
    },
    {
      Location: "India",
      Address: " 21 Lotus Lane, Mumbai, MH 400001",
    },
  ];

  const OfiiceContact = [
    {
      Location: "Nigeria",
      tel: "+234900898434",
      email: "SupportNG@mesoverse.com",
    },
    {
      Location: "Canada",
      tel: "+18983892929",
      email: "SupportCA@mesoverse.com",
    },
    {
      Location: "United Kingdom",
      tel: "+44787827873",
      email: "SupportUK@mesoverse.com",
    },
    {
      Location: "India",
      tel: "+968267678873",
      email: "SupportIND@mesoverse.com",
    },
  ];
  const [subMail, setSubMail] = React.useState("");

  const SubMailchangeHandler = (e) => {
    setSubMail(e.target.value);
  };

  const toast = useToast();

  return (
    <div>
      <SimpleGrid
        gap={8}
        templateColumns={"repeat(auto-fill, minmax(250px, 4fr))"}
        bg={"black"}
        position={"relative"}
        bottom={0}
      >
        <Card
          bg={"black"}
          // borderRight={"2px solid white"}
          // p={4}
          // borderRadius={0}
        >
          <CardHeader></CardHeader>
          <CardBody>
            <Text fontSize={"4xl"} color={"white"}>
              MesoVerse
            </Text>
          </CardBody>
        </Card>
        {/*  */}
        <Card bg={"black"} borderRadius={0}>
          <CardHeader>
            <Text as={"h1"} fontSize={"2xl"} color={"white"}>
              Office Address:
            </Text>
          </CardHeader>
          <CardBody mt={0}>
            {OfficeAddress.map((OfficeObject, index) => (
              <motion.div whileHover={{ scale: 1.2, originX: 0 }} key={index}>
                <Text mt={6} color={"white"} _hover={{ color: "#FDB154" }}>
                  {OfficeObject.Location}:
                  <Text as={"span"}>{OfficeObject.Address}</Text>
                </Text>
              </motion.div>
            ))}
          </CardBody>
        </Card>
        {/*  */}
        <Card bg={"black"} borderRadius={0}>
          <CardHeader>
            <Text as={"h1"} fontSize={"2xl"} color={"white"}>
              Contact:
            </Text>
          </CardHeader>
          <CardBody mt={0}>
            {OfiiceContact.map((ObjectFromArray, index) => (
              <motion.div
                key={index}
                // mt={6}_hover={{ color: "#FDB154" }}
                whileHover={{ scale: 1.2, originX: 0 }}
              >
                <Text color={"white"} mt={6} _hover={{ color: "#FDB154" }}>
                  {ObjectFromArray.Location}:
                  <Text as={"span"}>{ObjectFromArray.tel}</Text>,<br />
                  <Text as={"span"}>{ObjectFromArray.email}</Text>
                </Text>
              </motion.div>
            ))}
          </CardBody>
        </Card>
        {/*  */}
        <Card bg={"black"}>
          <CardHeader fontWeight={"bold"} fontSize={"2xl"} color={"#FDB154"}>
            Subscribe for News letter
          </CardHeader>
          <CardBody>
            <FormControl as={"form"}>
              <FormLabel fontWeight={"bold"} color={"white"}>
                Email
              </FormLabel>
              <Input
                type="email"
                color={"white"}
                bg={"#024190"}
                outline={0}
                onChange={SubMailchangeHandler}
              />

              <Button
                // type="submit"
                mt={10}
                width={"100%"}
                bg={"#024190"}
                color={"white"}
                disabled={subMail === ""}
                _hover={{ bg: "#FDB154" }}
                onClick={() =>
                  toast({
                    title: "Subscribe successfully",
                    status: "success",
                    isClosable: true,
                    position: "bottom",
                    duration: 2000,
                  })
                }
              >
                Subscribe
                <Box ml={2}>
                  <RiMailSendLine />
                </Box>
              </Button>
              {/* <SubscribeButton disable={subMail === ""} /> */}
            </FormControl>
          </CardBody>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default Footer;
