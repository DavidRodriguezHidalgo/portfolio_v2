import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Camaloon">
      <Container>
        <Title>
          Camaloon <Badge>2021</Badge>
        </Title>
        <P>Personalized items and gifts.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.nazaries.com">
              https://www.camaloon.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Ruby on Rails, React, Angular, Graphql, Typescript, PostgreSQL
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/jobs/camaloon_thumb.png" alt="Camaloon" />
      </Container>
    </Layout>
  )
}

export default Work
