export enum Theme {
	light = 'light',
	dark  = 'dark',
	os    = 'os',
}

export function updateTheme() {
		if (localStorage.theme === Theme.dark) {
			document.documentElement.classList.add('dark')
		} else if (localStorage.theme === Theme.light) {
			document.documentElement.classList.remove('dark')
		} else {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
}

export function toggleTheme() {
  if (localStorage.theme === Theme.light) {
    localStorage.theme = Theme.dark
  } else if (localStorage.theme === Theme.dark) {
    localStorage.theme = Theme.os
  } else {
    localStorage.theme = Theme.light
  }

  updateTheme()
  return localStorage.theme
}