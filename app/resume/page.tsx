"use client";

import { useEffect } from "react";
import { profile } from "@/lib/data";

export default function ResumePage() {
    useEffect(() => {
        window.location.href = profile.links.resume;
    }, []);

    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Redirecting to resume...
            </p>
        </div>
    );
}
