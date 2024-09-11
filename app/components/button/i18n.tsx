'use client'
import React  from "react"
import { PiTranslateLight  } from "react-icons/pi";
import { getLanguageLabel } from "@/app/util";
import {
	Locale,
	routing,
	usePathname,
	useRouter,
} from "@/app/i18n/routing";
import { button_style } from ".";


const I18nButton: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname();

	const changeLocale = (l: string) => {
		router.replace(
			pathname,
			{ locale: l as Locale }
		);
	}

	return (
		<button className={`${button_style} group hover:relative`} >
			<PiTranslateLight />
			<ul className={`hidden group-hover:block absolute -bottom-12 text-xs w-16 bg-slate-100 dark:bg-slate-700 rounded`}>
				{routing.locales.map((l: string, i: number) => {
					return (
						<li key={i} className={`hover:bg-slate-200 dark:hover:bg-slate-600 rounded py-1`} 
							onClick={() => changeLocale(l)}>
							{getLanguageLabel(l)}
						</li>
					)
				})}
			</ul>
		</button>
	)
}

export default I18nButton;