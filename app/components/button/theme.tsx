'use client'

import React, { useEffect, useState } from "react"
import { PiMonitorBold  ,  PiSunFill, PiMoonFill } from "react-icons/pi";
import { button_style } from ".";


enum Theme {
	light = 'light',
	dark  = 'dark',
	os    = 'os',
}

const ThemeButton: React.FC = () => {
	const [theme, setTheme] = useState<Theme>(Theme.os)

	useEffect(() => {
		setTheme(localStorage.theme)
	}, [])

	useEffect(() => {
		refreshTheme()
	}, [theme])

	const changeTheme = () => {
		if (theme === Theme.os) {
			setTheme(Theme.dark)
		} else if (theme === Theme.dark) {
			setTheme(Theme.light)
		} else {
			setTheme(Theme.os)
		}
	}
	const refreshTheme = () => {
		localStorage.theme = theme
		if (theme === Theme.dark) {
			document.documentElement.classList.add('dark')
		} else if (theme === Theme.light) {
			document.documentElement.classList.remove('dark')
		} else {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}

	return (
		<button className={`${button_style}`} onClick={changeTheme}>
			{ theme === Theme.os   ? <PiMonitorBold />
			: theme === Theme.dark ? <PiMoonFill /> 
														 : <PiSunFill /> 
			}
		</button>
	)
}

export default ThemeButton;