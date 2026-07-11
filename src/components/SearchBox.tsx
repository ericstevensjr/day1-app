import { type ChangeEvent } from "react";

interface SearchBoxProps {
    value: string;
    onQueryChange: (query: string) => void;
}

export default function SearchBox({ value, onQueryChange }: SearchBoxProps) {
    return (
        <input
            type="text"
            placeholder="Search inventory..."
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onQueryChange(e.target.value)}
            className="w-full px-3 py-2 rounded border"
        />
    );
}