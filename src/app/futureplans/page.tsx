import { Metadata } from 'next';
import FuturePlansContent from '@/components/future-plans-content';

export const metadata: Metadata = {
  title: 'Future Plans - Eoghan McCarroll',
  description: 'My future goals and aspirations',
};

export default function FuturePlans() {
  return <FuturePlansContent />;
}