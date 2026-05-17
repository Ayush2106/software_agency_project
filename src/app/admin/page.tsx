import ProjectManager from "@/components/admin/ProjectManager";

export const metadata = {
  title: "Admin | VioletForge",
  description: "Manage portfolio projects",
};

export default function AdminPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <ProjectManager />
    </div>
  );
}

