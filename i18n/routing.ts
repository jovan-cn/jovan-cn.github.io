import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh'],
 
  // Used when no locale matches
  defaultLocale: 'en',

  // no prefix for the default locale
  // localePrefix: 'as-needed',
  // static export require 'always'
  localePrefix: 'always',
  
  localeDetection: false,
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);