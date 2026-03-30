import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  UnorderedList,
  Icon,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
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
        {/* Hero / Professional Headline */}
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb={6}
          p={3}
          align="center"
        >
          Currently doing AI development for expenses at Factorial
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              David Rodr&iacute;guez
            </Heading>
            <Text fontSize="md" fontWeight="bold" mt={1}>
              Senior Full Stack Engineer
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              AI Features &middot; React &middot; Ruby on Rails
            </Text>
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

        {/* Experience */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <UnorderedList spacing={3} pl={2}>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Factorial (2022&ndash;present):
              </Text>{' '}
              Leading AI strategy for expenses &ndash; built LLM-powered expense
              skill, now creating bulk submission feature (file upload &rarr;
              auto-generated expenses)
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Camaloon (2021&ndash;2022):
              </Text>{' '}
              Full-stack developer &ndash; built PrestaShop plugin, embroidery
              effect tool, and led UX refactor for the Atelier
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Nazaries IT (2014&ndash;2021):
              </Text>{' '}
              Early React adopter, mentored 3 juniors, led multiple client
              projects (NGA, Amnist&iacute;a Internacional)
            </ListItem>
          </UnorderedList>
          <Box align="center" my={4}>
            <NextLink href="/jobs">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        {/* Bio Timeline */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1990</BioYear>
            Born in Granada, Spain
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Computer Science Degree, University of Granada
          </BioSection>
          <BioSection>
            <BioYear>2014&ndash;2021</BioYear>
            Nazaries IT &ndash; from intern to lead developer
          </BioSection>
          <BioSection>
            <BioYear>2021&ndash;2022</BioYear>
            Camaloon &ndash; full-stack developer
          </BioSection>
          <BioSection>
            <BioYear>2022&ndash;present</BioYear>
            Factorial &ndash; senior full-stack engineer, AI lead
          </BioSection>
        </Section>

        {/* Contact */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <List>
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
                  david-rodr&iacute;guez-hidalgo
                </Button>
              </Link>
            </ListItem>
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
          </List>
          <Box align="center" my={4}>
            <Link
              href="https://cvdrodriguez.vercel.app"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                View detailed CV
              </Button>
            </Link>
          </Box>
        </Section>

        {/* Blog */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Blog
          </Heading>
          <Text mb={4}>
            I write about things I learn, ideas I explore, and what I find
            interesting. Check out my blog on Fika.
          </Text>
          <Box align="center">
            <Link
              href="https://davidrodh.fika.bar/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
                Read my blog
              </Button>
            </Link>
          </Box>
        </Section>

        {/* I love - de-emphasized */}
        <Section delay={0.4}>
          <Text
            fontSize="sm"
            color={useColorModeValue('gray.500', 'gray.500')}
            textAlign="center"
            mt={4}
          >
            I also love books, bonsai, and videogames.
          </Text>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
