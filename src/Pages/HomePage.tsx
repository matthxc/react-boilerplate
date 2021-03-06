// External Libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const HomePage: React.FC<{}> = () => (
  <Container>
    <Typography align="center" variant="h1">
      Home page
    </Typography>
    <Button component={Link} variant="contained" color="primary" to="/sss">
      Hello world
    </Button>
  </Container>
);

HomePage.displayName = 'HomePage';

export default HomePage;
