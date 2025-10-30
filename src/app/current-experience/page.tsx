import { Metadata } from 'next';
import CurrentExperienceContent from '@/components/current-experience-content';

export const metadata: Metadata = {
  title: 'Current Experience - Eoghan McCarroll',
  description: 'Details about current professional and academic experience',
};

export default function CurrentExperience() {
  return <CurrentExperienceContent />;
}
