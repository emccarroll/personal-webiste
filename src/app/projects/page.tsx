import { Metadata } from 'next';
import ProjectsContent from '@/components/projects-content';

export const metadata: Metadata = {
  title: 'Projects - Eoghan McCarroll',
  description: 'My personal and professional projects',
};

export default function Projects() {
  return <ProjectsContent />;
}