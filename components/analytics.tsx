'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { sendPageView } from '@/lib/analytics';

export function Analytics() {
    const pathname = usePathname();
    const lastPathRef = useRef('');

    useEffect(() => {
        if (pathname !== lastPathRef.current) {
            lastPathRef.current = pathname;
            sendPageView();
        }
    }, [pathname]);

    return null;
}
