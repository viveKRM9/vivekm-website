// app/projects/[slug]/page.tsx
// This is a Server Component - NO "use client"
import Link from "next/link";
import ProjectDetailClient from './ProjectDetailClient';
import { projectDataMap } from './data';

// Generate static paths at build time
export function generateStaticParams() {
  return [
    { slug: "benefittz" },
    { slug: "kids-funzone" },
    { slug: "green-vision-cleansing" },
    { slug: "gatenest" },
    { slug: "sitterboss" },
    { slug: "ewomen-network" },
  ];
}

// Server Component - fetches data and passes to client
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // ✅ Await the params Promise
  const { slug } = await params;
  const project = projectDataMap[slug];
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900">404</h1>
          <p className="mt-2 text-zinc-600">Project not found</p>
          <Link href="/#projects" className="mt-4 inline-block text-blue-600 hover:underline">
  Back to Portfolio
</Link>
        </div>
      </div>
    );
  }
  
  return <ProjectDetailClient project={project} />;
}