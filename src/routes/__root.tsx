import { Button } from "@/components/ui/button";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { RocketIcon } from "lucide-react";

export const Route = createRootRoute({
  component: () => (
    <div className="flex justify-center flex-col items-center">
      <header className="border-b">
        <div className="container flex h-16 w-screen items-center justify-evenly py-4">
          <div className="flex items-center gap-2">
            <RocketIcon className="h-6 w-6" />
            <span className="text-xl font-bold">DevOps Hub</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="font-medium text-primary">
              Home
            </Link>
            <Link
              to="/practices"
              className="font-medium text-muted-foreground hover:text-primary"
            >
              Practices
            </Link>
            <Link
              to="/tools"
              className="font-medium text-muted-foreground hover:text-primary"
            >
              Tools
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <a href="https://github.com/features/actions" target="_blank">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </header>
      <hr />
      <Outlet />
      <footer className="border-t">
        <div className="container flex flex-col gap-2 py-4 md:h-16 md:flex-row md:items-center md:py-0">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevOps Hub. All rights reserved.
          </div>
          <nav className="md:ml-auto flex gap-4 sm:gap-6">
            <span className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Terms of Service
            </span>
            <span className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </span>
          </nav>
        </div>
      </footer>
      <TanStackRouterDevtools />
    </div>
  ),
});
