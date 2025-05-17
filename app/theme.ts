// customize for joyui

import { extendTheme } from "@mui/joy";
import { ColorSystemOptions } from "@mui/joy/styles/extendTheme";

const tailwindColors = {
  // 青色
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
  // 蓝色
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
  // 红色
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
  // 绿色
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
  // 黄色
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
  // 紫色
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
  // 粉色
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
  // 灰色
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
  // 橙色
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
  // 青蓝色
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

const createColorSchemes = (name: keyof typeof tailwindColors): ColorSystemOptions => {
  const colors = tailwindColors[name];
  return {
    palette: {
      primary: {
        ...colors,
      },
      text: {
        primary: colors[500],
      }
    }
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: createColorSchemes("teal"),
    dark: createColorSchemes("teal"),
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
      },
      styleOverrides: {
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
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontSize: ownerState.size === 'sm' ? '0.5rem' : '0.875rem',
          paddingLeft: '6px',
          paddingRight: '6px',
          paddingTop: '0px',
          paddingBottom: '0px',
        })
      }
    }
  },
});

export default theme;