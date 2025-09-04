import { TriangleIcon } from "lucide-react";
import Link from "next/link";

export function Logo() {
    return (
        <Link
            href={"#home"}
            className="text-white text-xl font-light flex items-center gap-2"
        >
            <TriangleIcon strokeWidth={1.5} />
            <span>Erick Henrique</span>
        </Link>
    );
}
