// customize for joyui

import { extendTheme } from "@mui/joy";
import { ColorSystemOptions } from "@mui/joy/styles/extendTheme";

const tailwindColors = {
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63"
  }
};

const twcolor = (
  name: keyof typeof tailwindColors,
  level: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
) => {
  return tailwindColors[name][level];
}

const createColorSchemes = (
  name: keyof typeof tailwindColors,
  mode: string,
): ColorSystemOptions => {
  const colors = tailwindColors[name];
  const isLight = mode === 'light';
  return {
    palette: {
      primary: {
        ...colors,
      },
      background: {
        body: isLight ? twcolor('zinc', 100) : twcolor('slate', 800),
        surface: twcolor('slate', isLight ? 200 : 900),
      },
      text: {
        secondary: twcolor('zinc', isLight ? 800 : 400),
      },
      focusVisible: twcolor('gray', isLight ? 300 : 700),
    }
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: createColorSchemes("blue", 'light'),
    dark: createColorSchemes("slate", 'dark'),
  },
  components: {
    JoyButton: {
      defaultProps: {
        size: "sm",
        variant: 'outlined',
      },
    },
    JoyInput: {
      defaultProps: {
        size: "sm",
        variant: 'soft',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.surface,
          // "--_Input-focusedHighlight": twcolor('gray', 300),   /* focusVisible for global */
          // [theme.getColorSchemeSelector('dark')]: {
          //   "--_Input-focusedHighlight": twcolor('gray', 700),
          // }
        })
      }
    },
    JoyTooltip: {
      defaultProps: {
        arrow: true,
        placement: 'top',
      },
    },
    JoySelect: {
      defaultProps: {
        size: "sm",
      },
      styleOverrides: {
        listbox: {
          zIndex: 9999,
        },
      },
    },
    JoyAutocomplete: {
      styleOverrides: {
        listbox: {
          zIndex: 9999,
        },
      },
    },
    JoyChip: {
      defaultProps: {
        size: "sm",
        variant: 'outlined',
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          backgroundColor: twcolor('zinc', 100),
          color: twcolor('gray', 800),
          fontSize: ownerState.size === 'sm' ? '0.575rem' : '0.625rem',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: twcolor('slate', 900),
            color: twcolor('gray', 400)
          },
        })
      }
    },
    JoyDrawer: {
      defaultProps: {
        size: "md",
        variant: 'plain',
      },
      styleOverrides: {
        content: ({ ownerState, theme }) => ({
          backgroundColor: theme.palette.background.body,
          width: {
            sm: 180,
            md: 210,
            lg: 240,
          }[ownerState.size || 'md'],
          transition: "width 0.3s ease, transform 0.3s ease",
        }),
      },
    },
    JoyIconButton: {
      defaultProps: {
        variant: 'plain',
      },
    }
  },
});

export default theme;
