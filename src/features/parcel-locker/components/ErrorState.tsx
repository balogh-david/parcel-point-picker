import { TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle, Button } from "@/components";

type ErrorStateProps = {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <Alert variant="destructive">
      <TriangleAlert className="size-4"/>
      <AlertTitle>Failed to load pickup points</AlertTitle>
      <AlertDescription className="space-y-3">
        <p>{message}</p>
        <Button variant="outline" size="sm" onClick={onRetry}>
          Retry
        </Button>
      </AlertDescription>
    </Alert>
  );
}
