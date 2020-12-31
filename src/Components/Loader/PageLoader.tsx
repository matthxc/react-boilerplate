// External libraries
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

// Material UI
import Typography from '@material-ui/core/Typography';

const PageLoaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PageLoader: React.FC<{}> = ({ children }) => (
  <PageLoaderWrapper>
    <CircularProgress size="3rem" className="margin-b-one" />
    {children && <div className="margin-b-one">{children}</div>}
    <Typography variant="h6">Loading...</Typography>
  </PageLoaderWrapper>
);
