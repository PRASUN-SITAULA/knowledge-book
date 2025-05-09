import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  RocketIcon,
  GitBranchIcon,
  ServerIcon,
  CloudIcon,
  BoxIcon,
  BarChartIcon,
  ShieldIcon,
  CodeIcon,
} from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tools")({
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
                  DevOps Tools
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the essential tools that power modern DevOps
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  CI/CD Tools
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Tools that automate your build, test, and deployment
                  pipelines.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>GitHub Actions</CardTitle>
                    <GitBranchIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>
                    Automate workflows directly in your GitHub repository
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">GitHub</Badge>
                    <Badge variant="secondary">YAML</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    GitHub Actions makes it easy to automate all your software
                    workflows with world-class CI/CD. Build, test, and deploy
                    your code right from GitHub.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href="https://github.com/features/actions"
                      target="_blank"
                    >
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Jenkins</CardTitle>
                    <ServerIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>
                    Open-source automation server
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">Open Source</Badge>
                    <Badge variant="secondary">Java</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jenkins is a self-contained, open source automation server
                    that can be used to automate all sorts of tasks related to
                    building, testing, and delivering or deploying software.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.jenkins.io/" target="_blank">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>CircleCI</CardTitle>
                    <RocketIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>Cloud-based CI/CD platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">Cloud</Badge>
                    <Badge variant="secondary">YAML</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    CircleCI is a cloud-based CI/CD platform that automates the
                    build, test, and deployment process. It offers a flexible
                    configuration and supports a wide range of languages and
                    platforms.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://circleci.com/" target="_blank">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Infrastructure Tools
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Tools for managing and provisioning infrastructure as code.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Terraform</CardTitle>
                    <CloudIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>Infrastructure as Code tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">IaC</Badge>
                    <Badge variant="secondary">Multi-Cloud</Badge>
                    <Badge variant="secondary">HCL</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Terraform is an open-source infrastructure as code software
                    tool that enables you to safely and predictably create,
                    change, and improve infrastructure.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.terraform.io/" target="_blank">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Docker</CardTitle>
                    <BoxIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>Container platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Containers</Badge>
                    <Badge variant="secondary">Microservices</Badge>
                    <Badge variant="secondary">Dockerfile</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Docker is a platform for developing, shipping, and running
                    applications in containers, allowing for consistent
                    environments across development and production.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.docker.com/" target="_blank">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Kubernetes</CardTitle>
                    <ServerIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>
                    Container orchestration platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Orchestration</Badge>
                    <Badge variant="secondary">Containers</Badge>
                    <Badge variant="secondary">YAML</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kubernetes is an open-source system for automating
                    deployment, scaling, and management of containerized
                    applications, providing a platform for container
                    orchestration.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://kubernetes.io/" target="_blank">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Monitoring & Security Tools
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Tools for monitoring application performance and ensuring
                  security.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Prometheus</CardTitle>
                    <BarChartIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>
                    Monitoring and alerting toolkit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Monitoring</Badge>
                    <Badge variant="secondary">Metrics</Badge>
                    <Badge variant="secondary">Alerting</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Prometheus is an open-source systems monitoring and alerting
                    toolkit with a dimensional data model, flexible query
                    language, and integrated alerting.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://prometheus.io/" target="_blank">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>SonarQube</CardTitle>
                    <CodeIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>
                    Code quality and security platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Code Quality</Badge>
                    <Badge variant="secondary">Static Analysis</Badge>
                    <Badge variant="secondary">Security</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    SonarQube is an open-source platform for continuous
                    inspection of code quality and security, helping developers
                    write cleaner and safer code.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.sonarqube.org/" target="_blank">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Vault</CardTitle>
                    <ShieldIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>Secrets management tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Security</Badge>
                    <Badge variant="secondary">Secrets</Badge>
                    <Badge variant="secondary">Encryption</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    HashiCorp Vault is a tool for securely accessing secrets
                    like API keys, passwords, and certificates. It handles
                    leasing, key revocation, key rolling, and auditing.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.vaultproject.io/" target="_blank">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Start Your DevOps Journey
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Learn more about DevOps practices and how to implement them in
                  your organization.
                </p>
              </div>
              <Button asChild size="lg">
                <Link to="/practices">Explore DevOps Practices</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
