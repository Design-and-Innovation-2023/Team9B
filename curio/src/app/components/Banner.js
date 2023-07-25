'use client';

import Link from 'next/link';

export default function Banner() {
    return(
            <div>
                <Link href="/">Curio Controller</Link><br/>
                <Link href="/mcq1">MCQ Question #1</Link><br/>
                <Link href="/openended1">Open Ended Python Question #1</Link><br/>
                <hr />
            </div>
    );
};