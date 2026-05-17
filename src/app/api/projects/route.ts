import { NextRequest, NextResponse } from "next/server";
import { getProjects, saveProjects } from "@/lib/projects";
import type { Project } from "@/lib/types";

function checkAuth(request: NextRequest): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return true;
  const auth = request.headers.get("x-admin-secret");
  return auth === secret;
}

export async function GET() {
  const projects = await getProjects();
  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as Omit<Project, "id">;
  const projects = await getProjects();
  const newProject: Project = {
    ...body,
    id: crypto.randomUUID(),
    tech: body.tech || [],
    featured: body.featured ?? false,
  };
  projects.push(newProject);
  await saveProjects(projects);
  return NextResponse.json(newProject, { status: 201 });
}

export async function PUT(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const updated = (await request.json()) as Project;
  const projects = await getProjects();
  const index = projects.findIndex((p) => p.id === updated.id);
  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  projects[index] = updated;
  await saveProjects(projects);
  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID required" }, { status: 400 });
  }
  const projects = await getProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  await saveProjects(filtered);
  return NextResponse.json({ success: true });
}
