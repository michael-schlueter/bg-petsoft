import { logIn } from "@/app/actions/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type AuthFormProps = {
  type: "signUp" | "logIn";
};

export default function AuthForm({ type }: AuthFormProps) {
  return (
    <form action={logIn}>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="mb-4 mt-2 space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>

      <Button>{type === "signUp" ? "Sign Up" : "Log In"}</Button>
    </form>
  );
}
