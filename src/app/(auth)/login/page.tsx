import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <form className="">
      <FieldGroup>
        <FieldSet>
          <FieldLegend className="text-center text-2xl!">Sign In</FieldLegend>
          <FieldDescription className="text-center text-base">
            Lorem ipsum dolor sit amet.
          </FieldDescription>

          <FieldGroup>
            <Field>
              <FieldLabel>Email Address</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <Icon icon="basil:envelope-solid" className="size-6" />
                </InputGroupAddon>
                <InputGroupInput
                  type="email"
                  placeholder="Enter email address"
                />
              </InputGroup>
            </Field>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel>Password</FieldLabel>
                <Link
                  href="/forgot-password"
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Forgot Password
                </Link>
              </div>
              <InputGroup>
                <InputGroupAddon>
                  <Icon icon="basil:lock-solid" className="size-6" />
                </InputGroupAddon>
                <InputGroupInput type="password" placeholder="Enter password" />
              </InputGroup>
            </Field>
            <Button size="lg">Sign In</Button>
          </FieldGroup>

          <FieldSeparator>Or Continue With</FieldSeparator>

          <div className="flex items-center justify-center gap-3">
            <Button className="" size="icon-lg" variant="outline">
              <Icon icon="devicon:google" className="size-5" />
            </Button>
            <Button className="" size="icon-lg" variant="outline">
              <Icon icon="devicon:facebook" className="size-5" />
            </Button>
            <Button className="" size="icon-lg" variant="outline">
              <Icon icon="devicon:twitter" className="size-5" />
            </Button>
          </div>

          <p className="text-center text-base font-normal">
            {`Don't have an account? `}{" "}
            <Link
              className="font-medium text-primary hover:underline"
              href="/register"
            >
              Sign Up
            </Link>
          </p>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}
