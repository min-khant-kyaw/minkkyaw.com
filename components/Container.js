import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Container({ children }) {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);

    return (
        <div>
            <p>Testing Children</p>
            <main>
                {children}
            </main>
        </div>
    )
}