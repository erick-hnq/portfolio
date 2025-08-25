import { TriangleIcon } from "lucide-react";

export function Logo() {
    return (
        <div className="text-white text-xl font-light flex items-center gap-2">
            <TriangleIcon strokeWidth={1.5} />
            <span>Erick Henrique</span>
        </div>
    );
}
