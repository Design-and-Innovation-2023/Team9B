'use client';

import Link              from 'next/link';
import { ErrorBoundary } from './ErrorBoundary';

export default function Banner() {
    return(
            <ErrorBoundary fallback="Error">
                <Link href="/">Curio Controller</Link><br/>
                <Link href="/openended1">Open Ended Python Question #1</Link><br/>
                <hr />
            </ErrorBoundary>
    );
};