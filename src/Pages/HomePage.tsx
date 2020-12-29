// External Libraries
import * as React from 'react';

// Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const HomePage: React.FC<{}> = () => (
  <Container>
    <Typography align="center" variant="h1">
      Home page
    </Typography>
    <Button variant="contained" color="primary">
      Hello world
    </Button>
  </Container>
);

HomePage.displayName = 'HomePage';

export default HomePage;
