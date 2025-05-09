import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitMergeIcon, RocketIcon, SettingsIcon } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Accelerate Your Development with DevOps
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  DevOps combines development and operations to shorten the
                  systems development life cycle while delivering features,
                  fixes, and updates frequently in close alignment with business
                  objectives.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link to="/practices">Explore Practices</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/tools">Discover Tools</Link>
                  </Button>
                </div>
              </div>
              {/* <Container className="h-64 w-64 ml-10" /> */}
              {/* <img
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="DevOps Cycle"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              /> */}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why DevOps Matters
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  DevOps practices help teams work more efficiently and deliver
                  higher quality software faster than ever before.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <RocketIcon className="h-5 w-5" />
                    Faster Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automate deployment pipelines to release features and fixes
                    quickly and reliably.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <GitMergeIcon className="h-5 w-5" />
                    Improved Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Break down silos between development and operations teams
                    for better communication.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <SettingsIcon className="h-5 w-5" />
                    Increased Reliability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Implement infrastructure as code and automated testing to
                    ensure consistent environments.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get Started with DevOps
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our resources to learn more about DevOps practices and
                  tools.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link to="/practices">DevOps Practices</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/tools">DevOps Tools</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
