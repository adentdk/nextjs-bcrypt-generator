import { NextPage } from 'next';
import Button from '../components/atoms/Button';
import Paper from '../components/atoms/Paper';
import DashboardTemplate from '../components/templates/Dashboard';

const Index: NextPage = () => (
  <DashboardTemplate>
    <Paper>
      <Button variant="contained" color="primary">halo</Button>
    </Paper>
  </DashboardTemplate>
);

export default Index;
