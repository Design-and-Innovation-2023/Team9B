'use client';

import                        '../styles/Banner.css';
import Link              from 'next/link';
import { ErrorBoundary } from './ErrorBoundary';

export default function Banner() {
    return(
            <ErrorBoundary fallback="Error">
                <div className="Banner">
                        <Link href="/">Curio Controller</Link><br/>
                        <Link href="/openended1">Open Ended Python Question #1</Link><br/>
                        <Link href="/openended2">Open Ended Python Question #2</Link><br/>
                        <hr />
                </div>
            </ErrorBoundary>
    );
};