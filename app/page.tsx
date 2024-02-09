import styles from '@/app/ui/home.module.css';
<div className={styles.shape} />;
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="{styles.shape}">
      <div className="{styles.shape}">
        {/* <AcmeLogo /> */}
      </div>
      <div className="{styles.shape}">
        <div className="{styles.shape}">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Capitulo 1</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="{styles.shape}">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <div className="{styles.shape}"/>
          <Link
            href="/login"
            className="{styles.shape}"
          >
            <span>Log in</span> <ArrowRightIcon className="{styles.shape}" />
          </Link>
        </div>
        <div className="{styles.shape}">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
