'use client'

import { usePathname, useRouter } from "@/i18n/navigation";
import { IconButton } from "@mui/joy"
import { useLocale, useTranslations } from "next-intl";


export default function LanguageToggle() {
  const locale = useLocale();
  const t = useTranslations("language-button");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <IconButton onClick={() => {
      router.replace( pathname, { locale: locale === 'zh' ? 'en' : 'zh' } );
    }}>
      <span className="text-sm">{t('label')}</span>
    </IconButton>
  )
}