import Navbar from '../../organisms/Navbar';
import SideBar from '../../organisms/Sidebar';
import { IDashboardProps } from './interfaces';

export default function DashboardTemplate({ children }: IDashboardProps) {
  return (
    <div className="relative min-h-screen md:flex">
      <header>
        <SideBar />
      </header>
      <main className="w-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
