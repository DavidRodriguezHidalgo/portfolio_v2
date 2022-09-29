import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Nazaries">
      <Container>
        <Title>
          Nazaries IT <Badge>2014</Badge>
        </Title>
        <P>Software development consultancy and Iot solutions</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.nazaries.com">
              https://www.nazaries.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Ruby on Rails, React, MySQL</span>
          </ListItem>
        </List>
        <WorkImage src="/images/jobs/nazaries_thumb.png" alt="Nazaries" />
      </Container>
    </Layout>
  )
}

export default Work
