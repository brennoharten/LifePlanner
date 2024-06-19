"use client";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function AuthButton({ page }: { page: string  | undefined }) {
    const { data: session, status } = useSession();
    const isAuthenticated = status === "authenticated";

    return (
        <>
            {!isAuthenticated && page != null ? (
                <Link
                    href={page === "/register" ? "/login" : "/register"}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "absolute right-4 top-4 md:right-8 md:top-8"
                    )}
                >
                    {page === "/register" ? "Sign in" : "Register"}
                </Link>
            ) : (
                <Button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                    )}
                >
                    Sign out
                </Button>
            )}
        </>
    );
}