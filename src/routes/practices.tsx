import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GitBranchIcon,
  GitMergeIcon,
  RocketIcon,
  ServerIcon,
  SettingsIcon,
  TerminalIcon,
  RefreshCwIcon,
  MonitorIcon,
  ShieldIcon,
} from "lucide-react";

export const Route = createFileRoute("/practices")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  DevOps Practices
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Core methodologies and practices that drive successful DevOps
                  implementations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              {/* <img
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Continuous Integration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              /> */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Continuous Integration (CI)
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Continuous Integration is a development practice where
                  developers integrate code into a shared repository frequently,
                  preferably several times a day. Each integration can then be
                  verified by an automated build and automated tests.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <GitBranchIcon className="h-5 w-5 text-primary" />
                    <span>Frequent code commits to main branch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TerminalIcon className="h-5 w-5 text-primary" />
                    <span>Automated testing on each commit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <GitMergeIcon className="h-5 w-5 text-primary" />
                    <span>Early detection of integration issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Continuous Delivery/Deployment (CD)
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Continuous Delivery is the practice of automating the entire
                  software release process. Continuous Deployment takes this a
                  step further by automatically deploying every change that
                  passes all stages of your production pipeline.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <RocketIcon className="h-5 w-5 text-primary" />
                    <span>Automated release processes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ServerIcon className="h-5 w-5 text-primary" />
                    <span>Consistent deployment environments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <RefreshCwIcon className="h-5 w-5 text-primary" />
                    <span>Faster time to market</span>
                  </li>
                </ul>
              </div>
              {/* <img
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Continuous Delivery"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover order-1 lg:order-2"
              /> */}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Other Key DevOps Practices
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Beyond CI/CD, these practices form the foundation of
                  successful DevOps implementations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SettingsIcon className="h-5 w-5" />
                    Infrastructure as Code
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Managing and provisioning infrastructure through code
                    instead of manual processes. This enables consistent,
                    version-controlled infrastructure that can be deployed
                    repeatedly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MonitorIcon className="h-5 w-5" />
                    Monitoring and Observability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Implementing comprehensive monitoring and logging to gain
                    insights into application performance and system health,
                    enabling quick identification and resolution of issues.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldIcon className="h-5 w-5" />
                    DevSecOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Integrating security practices throughout the development
                    lifecycle, rather than applying security as an afterthought,
                    ensuring more secure applications from the start.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Ready to Implement DevOps?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Explore the tools that can help you implement these practices
                  in your organization.
                </p>
              </div>
              <Button asChild size="lg">
                <Link to="/tools">Discover DevOps Tools</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
