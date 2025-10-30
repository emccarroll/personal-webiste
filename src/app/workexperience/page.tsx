import { Metadata } from 'next';
import WorkExperienceContent from '@/components/work-experience-content';

export const metadata: Metadata = {
  title: 'Work Experience - Eoghan McCarroll',
  description: 'My past and current work experiences',
};

export default function WorkExperience() {
  return <WorkExperienceContent />;
}