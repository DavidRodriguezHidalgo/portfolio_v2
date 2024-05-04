import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb={6}
          p={3}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Spain!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              David Rodríguez
            </Heading>
            <p>Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/david.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            David is a full-stack developer. For backend development I use Ruby
            on Rails and React.js for frontend. What he likes is to learn new
            things and keep growing his skills. When not online, he loves bonsai
            care, book reading and playing videogames.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/jobs">
              <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1990</BioYear>
            Born in Granada, Spain.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Completed Computer Science Degree by Granada&apos;s University.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Worked at Nazaries IT
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at Camaloon
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at FactorialHr
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Books, Bonsai, Videogames.</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            How to contact me
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/DavidRodriguezHidalgo"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @DavidRodriguezHidalgo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="mailto:david.rodriguezhidalgo@yahoo.com"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  david.rodriguezhidalgo@yahoo.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/david-rodr%C3%ADguez-hidalgo-189a2b67/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  david-rodríguez-hidalgo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/denzilrh90" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  denzilrh90
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://cvdrodriguez.vercel.app" target="_blank">
                <Button variant="ghost" colorScheme="teal">
                  CV
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
