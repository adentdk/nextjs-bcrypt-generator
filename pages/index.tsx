import { NextPage } from 'next';
import Paper from '../components/atoms/Paper';
import DashboardTemplate from '../components/templates/Dashboard';

const Index: NextPage = () => (
  <DashboardTemplate>
    <Paper>
      <h1>Title</h1>
    </Paper>
  </DashboardTemplate>
);

export default Index;
