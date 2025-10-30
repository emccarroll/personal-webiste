import { Metadata } from 'next';
import InterestsContent from '@/components/interests-content';

export const metadata: Metadata = {
  title: 'Interests - Eoghan McCarroll',
  description: 'My interests in music and guitar playing',
};

export default function Interests() {
  return <InterestsContent />;
}