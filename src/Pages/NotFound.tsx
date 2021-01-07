// External Libraries
import * as React from 'react';

// Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const HomePage: React.FC<{}> = () => (
  <Container>
    <Card>
      <CardContent>
        <Typography align="center" variant="h1">
          404. Not Found.
        </Typography>
      </CardContent>
    </Card>
  </Container>
);

HomePage.displayName = 'HomePage';

export default HomePage;
