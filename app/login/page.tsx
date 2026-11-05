import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight, Building2, Globe, KeyRound, Lock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Sign in | JiffyCRM",
};

const ssoProviders = [
  { name: "Microsoft Entra ID", icon: Building2 },
  { name: "Google Workspace", icon: Globe },
  { name: "Okta", icon: KeyRound },
  { name: "SAML SSO", icon: Lock },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden flex-col justify-between bg-muted p-10 lg:flex">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Building2 className="size-6" />
            JiffyCRM
          </div>
          <div className="max-w-md space-y-6">
            <Badge variant="secondary">Enterprise identity</Badge>
            <h1 className="text-4xl font-semibold tracking-tight">
              Single sign-on for your organization
            </h1>
            <p className="text-muted-foreground">
              Connect JiffyCRM to your identity provider with SAML 2.0 or OIDC. Centralize access,
              provisioning, and security policies across your team.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4" />
                SAML 2.0 and OIDC support
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4" />
                SCIM user provisioning
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4" />
                Enforced multi-factor authentication
              </li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">Trusted by enterprise teams.</p>
        </section>

        <section className="flex items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md">
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 lg:hidden">
                  <Building2 className="size-6" />
                  <span className="font-semibold">JiffyCRM</span>
                </div>
                <CardTitle>Sign in to JiffyCRM</CardTitle>
                <CardDescription>Choose your organization&apos;s identity provider.</CardDescription>
              </div>
              <ThemeToggle />
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {ssoProviders.map((provider) => {
                const Icon = provider.icon;
                return (
                  <Button key={provider.name} variant="outline" className="w-full justify-start gap-3">
                    <Icon className="size-4" />
                    Continue with {provider.name}
                  </Button>
                );
              })}

              <div className="flex items-center gap-3 py-2">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">or continue with email</span>
                <Separator className="flex-1" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" type="email" placeholder="name@company.com" />
              </div>
              <Button className="w-full">
                Continue
                <ArrowRight className="size-4" />
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 text-xs text-muted-foreground">
              <div className="flex w-full items-center justify-between">
                <span>Need help?</span>
                <span>Privacy · Terms</span>
              </div>
              <div className="flex w-full items-center gap-2">
                <Lock className="size-3" />
                <span>Enterprise-grade security</span>
              </div>
            </CardFooter>
          </Card>
        </section>
      </div>
    </main>
  );
}
