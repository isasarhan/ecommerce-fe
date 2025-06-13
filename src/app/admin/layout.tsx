import AdminHeader from "@/components/admin/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/modules/admin/components/sidebar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <SidebarInset>
                <AdminHeader/>
                <div className="p-5">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
