import { Metadata } from 'next';
import HomeContent from '@/components/home-content';

export const metadata: Metadata = {
  title: 'Eoghan McCarroll - Personal Website',
  description: 'Personal website of Eoghan McCarroll',
};

export default function Home() {
  return <HomeContent />;
}
