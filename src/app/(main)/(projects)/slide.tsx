import { Slide } from "@/components/common/slide";
import { AnimateIn } from "@/components/animation/animate-in";
import { ProjectListSection } from "./project-list-section";
import { db } from "@/lib/db";
import { projectsTable, projectsTechsTable, techsTable } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export default async function ProjectsSlide() {
  // 1. Fetch all projects
  const allProjects = await db
    .select()
    .from(projectsTable)
    .orderBy(desc(projectsTable.id));

  // 2. Fetch all tech associations
  const allProjectTechs = await db
    .select({
      projectId: projectsTechsTable.projectId,
      tech: {
        id: techsTable.id,
        label: techsTable.label,
        url: techsTable.url,
        icon: techsTable.icon,
      },
    })
    .from(projectsTechsTable)
    .innerJoin(techsTable, eq(projectsTechsTable.techId, techsTable.id));

  // 3. Map techs to projects
  const projects = allProjects.map((project) => {
    const techs = allProjectTechs
      .filter((pt) => pt.projectId === project.id)
      .map((pt) => pt.tech);

    return { ...project, techs };
  });

  return (
    <Slide id="projects">
      <div className="container min-h-full mx-auto flex flex-col justify-center items-center px-3 lg:px-5">
        <AnimateIn animation="zoom-in-[0.9]">
          <h1 className="text-4xl font-medium text-center mb-5.5 lg:-mb-1.5">
            My Projects
          </h1>
        </AnimateIn>
        <ProjectListSection projects={projects} />
      </div>
    </Slide>
  );
}
