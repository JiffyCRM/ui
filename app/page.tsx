import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "JiffyCRM",
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="size-6" />
            <div className="flex flex-col gap-1">
              <CardTitle>JiffyCRM</CardTitle>
              <CardDescription>Customer relationship platform for enterprise teams.</CardDescription>
            </div>
          </div>
          <ThemeToggle />
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Secure access for your organization with enterprise single sign-on.
          </p>
          <Link href="/login" className="w-full">
            <Button className="w-full" size="lg">
              Log in
            </Button>
          </Link>
        </CardContent>
        <CardFooter>
          <Badge variant="secondary">Enterprise SSO</Badge>
        </CardFooter>
      </Card>
    </main>
  );
}
