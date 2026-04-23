import { FC } from "react";

import {
    Center,
    Container,
    Heading,
    Image,
    HStack,
    Stack,
    Flex,
    Box,
    IconButton,
    Button,
    useColorMode,
} from "@chakra-ui/react";

import { Content, configs, useContent, MarkdownFile } from "shared/content/Content";
import { Socials } from "shared/socials/Socials";
import { WorkPageId } from "utils/useScroll";
import { ChevronDownIcon } from "utils/Icons";

export const Landing: FC = () => {
    const content = useContent(MarkdownFile.Landing);
    const { colorMode } = useColorMode();

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById(WorkPageId);

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box id="page-landing">
            <Center pb={{ base: 16, md: 32 }}>
                <HStack spacing="16" justifyContent="space-between" alignItems="flex-start">
                    <Stack flex={{ base: "1", lg: "0.6" }} spacing="16">
                        <Stack spacing="8">
                            <Heading
                                fontSize={{ base: "5xl", md: "7xl" }}
                                lineHeight="1"
                                data-aos="fade-down"
                                data-aos-delay="400"
                            >
                                {configs.landing.headline}
                            </Heading>
                            <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg">
                                {content.landing}
                            </Content>
                        </Stack>

                        <Socials delay={1000} />
                    </Stack>
                </HStack>
            </Center>
            <Flex justifyContent="center" data-aos="fade" data-aos-delay="1400">
                <IconButton
                    fontSize="3xl"
                    aria-label="down arrow button"
                    icon={<ChevronDownIcon />}
                    onClick={scrollIntoView}
                ></IconButton>
            </Flex>
        </Box>
    );
};
