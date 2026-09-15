import { FaHome } from "react-icons/fa";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="circuit-bg min-h-[70vh] flex items-center">
      <Container className="flex flex-col items-center text-center gap-6 py-24">
        <span className="text-7xl sm:text-8xl font-extrabold text-gradient-yellow">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Page Not Found</h1>
        <p className="text-slate-300 max-w-md">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Button to="/" variant="primary" icon={FaHome}>
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
