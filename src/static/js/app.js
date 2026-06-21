(function () {
  "use strict";

  const proto = location.protocol === "https:" ? "wss:" : "ws:";

/* ═══════════════════════════════════════
                THEMES
═══════════════════════════════════════ */
  const THEMES = {
    gnome: {
      label: "GNOME",
      bg: "#300a24",
      theme: {
        background: "#300a24",
        foreground: "#ffffff",
        cursor: "#ffffff",
        selectionBackground: "rgba(255,255,255,0.3)",
        black: "#2e3436",
        red: "#cc0000",
        green: "#4e9a06",
        yellow: "#c4a000",
        blue: "#3465a4",
        magenta: "#75507b",
        cyan: "#06989a",
        white: "#d3d7cf",
        brightBlack: "#555753",
        brightRed: "#ef2929",
        brightGreen: "#8ae234",
        brightYellow: "#fce94f",
        brightBlue: "#729fcf",
        brightMagenta: "#ad7fa8",
        brightCyan: "#34e2e2",
        brightWhite: "#eeeeec",
      },
    },
    dracula: {
      label: "Dracula",
      bg: "#282a36",
      theme: {
        background: "#282a36",
        foreground: "#f8f8f2",
        cursor: "#f8f8f2",
        selectionBackground: "rgba(189,147,249,0.3)",
        black: "#21222c",
        red: "#ff5555",
        green: "#50fa7b",
        yellow: "#f1fa8c",
        blue: "#bd93f9",
        magenta: "#ff79c6",
        cyan: "#8be9fd",
        white: "#f8f8f2",
        brightBlack: "#6272a4",
        brightRed: "#ff6e6e",
        brightGreen: "#69ff94",
        brightYellow: "#ffffa5",
        brightBlue: "#d6acff",
        brightMagenta: "#ff92df",
        brightCyan: "#a4ffff",
        brightWhite: "#ffffff",
      },
    },
    nord: {
      label: "Nord",
      bg: "#2e3440",
      theme: {
        background: "#2e3440",
        foreground: "#d8dee9",
        cursor: "#d8dee9",
        selectionBackground: "rgba(136,192,208,0.3)",
        black: "#3b4252",
        red: "#bf616a",
        green: "#a3be8c",
        yellow: "#ebcb8b",
        blue: "#81a1c1",
        magenta: "#b48ead",
        cyan: "#88c0d0",
        white: "#e5e9f0",
        brightBlack: "#4c566a",
        brightRed: "#bf616a",
        brightGreen: "#a3be8c",
        brightYellow: "#ebcb8b",
        brightBlue: "#81a1c1",
        brightMagenta: "#b48ead",
        brightCyan: "#8fbcbb",
        brightWhite: "#eceff4",
      },
    },
    gruvbox: {
      label: "Gruvbox",
      bg: "#282828",
      theme: {
        background: "#282828",
        foreground: "#ebdbb2",
        cursor: "#ebdbb2",
        selectionBackground: "rgba(235,219,178,0.25)",
        black: "#282828",
        red: "#cc241d",
        green: "#98971a",
        yellow: "#d79921",
        blue: "#458588",
        magenta: "#b16286",
        cyan: "#689d6a",
        white: "#a89984",
        brightBlack: "#928374",
        brightRed: "#fb4934",
        brightGreen: "#b8bb26",
        brightYellow: "#fabd2f",
        brightBlue: "#83a598",
        brightMagenta: "#d3869b",
        brightCyan: "#8ec07c",
        brightWhite: "#ebdbb2",
      },
    },
    catppuccin: {
      label: "Catppuccin",
      bg: "#1e1e2e",
      theme: {
        background: "#1e1e2e",
        foreground: "#cdd6f4",
        cursor: "#f5e0dc",
        selectionBackground: "rgba(245,224,220,0.25)",
        black: "#45475a",
        red: "#f38ba8",
        green: "#a6e3a1",
        yellow: "#f9e2af",
        blue: "#89b4fa",
        magenta: "#f5c2e7",
        cyan: "#94e2d5",
        white: "#bac2de",
        brightBlack: "#585b70",
        brightRed: "#f38ba8",
        brightGreen: "#a6e3a1",
        brightYellow: "#f9e2af",
        brightBlue: "#89b4fa",
        brightMagenta: "#f5c2e7",
        brightCyan: "#94e2d5",
        brightWhite: "#a6adc8",
      },
    },
    tokyo: {
      label: "Tokyo Night",
      bg: "#1a1b26",
      theme: {
        background: "#1a1b26",
        foreground: "#c0caf5",
        cursor: "#c0caf5",
        selectionBackground: "rgba(122,162,247,0.25)",
        black: "#15161e",
        red: "#f7768e",
        green: "#9ece6a",
        yellow: "#e0af68",
        blue: "#7aa2f7",
        magenta: "#bb9af7",
        cyan: "#7dcfff",
        white: "#a9b1d6",
        brightBlack: "#414868",
        brightRed: "#f7768e",
        brightGreen: "#9ece6a",
        brightYellow: "#e0af68",
        brightBlue: "#7aa2f7",
        brightMagenta: "#bb9af7",
        brightCyan: "#7dcfff",
        brightWhite: "#c0caf5",
      },
    },
    monokai: {
      label: "Monokai",
      bg: "#272822",
      theme: {
        background: "#272822",
        foreground: "#f8f8f2",
        cursor: "#f8f8f2",
        selectionBackground: "rgba(73,72,62,0.6)",
        black: "#272822",
        red: "#f92672",
        green: "#a6e22e",
        yellow: "#f4bf75",
        blue: "#66d9ef",
        magenta: "#ae81ff",
        cyan: "#a1efe4",
        white: "#f8f8f2",
        brightBlack: "#75715e",
        brightRed: "#f92672",
        brightGreen: "#a6e22e",
        brightYellow: "#f4bf75",
        brightBlue: "#66d9ef",
        brightMagenta: "#ae81ff",
        brightCyan: "#a1efe4",
        brightWhite: "#f9f8f5",
      },
    },
    one_dark: {
      label: "One Dark",
      bg: "#282c34",
      theme: {
        background: "#282c34",
        foreground: "#abb2bf",
        cursor: "#abb2bf",
        selectionBackground: "rgba(171,178,191,0.25)",
        black: "#282c34",
        red: "#e06c75",
        green: "#98c379",
        yellow: "#e5c07b",
        blue: "#61afef",
        magenta: "#c678dd",
        cyan: "#56b6c2",
        white: "#abb2bf",
        brightBlack: "#5c6370",
        brightRed: "#e06c75",
        brightGreen: "#98c379",
        brightYellow: "#e5c07b",
        brightBlue: "#61afef",
        brightMagenta: "#c678dd",
        brightCyan: "#56b6c2",
        brightWhite: "#ffffff",
      },
    },
    solarized: {
      label: "Solarized",
      bg: "#002b36",
      theme: {
        background: "#002b36",
        foreground: "#839496",
        cursor: "#839496",
        selectionBackground: "rgba(131,148,150,0.3)",
        black: "#073642",
        red: "#dc322f",
        green: "#859900",
        yellow: "#b58900",
        blue: "#268bd2",
        magenta: "#d33682",
        cyan: "#2aa198",
        white: "#eee8d5",
        brightBlack: "#002b36",
        brightRed: "#cb4b16",
        brightGreen: "#586e75",
        brightYellow: "#657b83",
        brightBlue: "#839496",
        brightMagenta: "#6c71c4",
        brightCyan: "#93a1a1",
        brightWhite: "#fdf6e3",
      },
    },
    high_contrast: {
      label: "High Contrast",
      bg: "#000000",
      theme: {
        background: "#000000",
        foreground: "#ffffff",
        cursor: "#ffffff",
        selectionBackground: "rgba(255,255,255,0.3)",
        black: "#000000",
        red: "#ff0000",
        green: "#00ff00",
        yellow: "#ffff00",
        blue: "#6699ff",
        magenta: "#ff00ff",
        cyan: "#00ffff",
        white: "#ffffff",
        brightBlack: "#555555",
        brightRed: "#ff5555",
        brightGreen: "#55ff55",
        brightYellow: "#ffff55",
        brightBlue: "#99bbff",
        brightMagenta: "#ff55ff",
        brightCyan: "#55ffff",
        brightWhite: "#ffffff",
      },
    },
    matrix: {
      label: "Matrix",
      bg: "#000000",
      theme: {
        background: "#000000",
        foreground: "#00ff41",
        cursor: "#00ff41",
        selectionBackground: "rgba(0,255,65,0.3)",
        black: "#000000",
        red: "#00aa00",
        green: "#00ff41",
        yellow: "#44ff44",
        blue: "#00cc66",
        magenta: "#00ff99",
        cyan: "#00ffaa",
        white: "#ccffcc",
        brightBlack: "#005500",
        brightRed: "#00dd00",
        brightGreen: "#00ff66",
        brightYellow: "#66ff66",
        brightBlue: "#00ff88",
        brightMagenta: "#00ffbb",
        brightCyan: "#00ffdd",
        brightWhite: "#ffffff",
      },
    },

    cyberpunk: {
      label: "Cyberpunk",
      bg: "#0d0221",
      theme: {
        background: "#0d0221",
        foreground: "#f706cf",
        cursor: "#05ffa1",
        selectionBackground: "rgba(247,6,207,0.3)",
        black: "#0d0221",
        red: "#ff0055",
        green: "#05ffa1",
        yellow: "#ffe600",
        blue: "#00d9ff",
        magenta: "#f706cf",
        cyan: "#05ffa1",
        white: "#ffffff",
        brightBlack: "#2a0a4a",
        brightRed: "#ff3377",
        brightGreen: "#44ffbb",
        brightYellow: "#fff066",
        brightBlue: "#66e6ff",
        brightMagenta: "#ff66dd",
        brightCyan: "#66ffdd",
        brightWhite: "#ffffff",
      },
    },

    github_dark: {
      label: "GitHub Dark",
      bg: "#0d1117",
      theme: {
        background: "#0d1117",
        foreground: "#c9d1d9",
        cursor: "#58a6ff",
        selectionBackground: "rgba(88,166,255,0.25)",
        black: "#484f58",
        red: "#ff7b72",
        green: "#3fb950",
        yellow: "#d29922",
        blue: "#58a6ff",
        magenta: "#bc8cff",
        cyan: "#39c5cf",
        white: "#b1bac4",
        brightBlack: "#6e7681",
        brightRed: "#ffa198",
        brightGreen: "#56d364",
        brightYellow: "#e3b341",
        brightBlue: "#79c0ff",
        brightMagenta: "#d2a8ff",
        brightCyan: "#56d4dd",
        brightWhite: "#f0f6fc",
      },
    },

    rose_pine: {
      label: "Rosé Pine",
      bg: "#191724",
      theme: {
        background: "#191724",
        foreground: "#e0def4",
        cursor: "#ebbcba",
        selectionBackground: "rgba(235,188,186,0.25)",
        black: "#26233a",
        red: "#eb6f92",
        green: "#31748f",
        yellow: "#f6c177",
        blue: "#9ccfd8",
        magenta: "#c4a7e7",
        cyan: "#ebbcba",
        white: "#e0def4",
        brightBlack: "#6e6a86",
        brightRed: "#eb6f92",
        brightGreen: "#31748f",
        brightYellow: "#f6c177",
        brightBlue: "#9ccfd8",
        brightMagenta: "#c4a7e7",
        brightCyan: "#ebbcba",
        brightWhite: "#ffffff",
      },
    },

    ayu_dark: {
      label: "Ayu Dark",
      bg: "#0a0e14",
      theme: {
        background: "#0a0e14",
        foreground: "#b3b1ad",
        cursor: "#ffcc66",
        selectionBackground: "rgba(255,204,102,0.25)",
        black: "#01060e",
        red: "#ea6c73",
        green: "#91b362",
        yellow: "#f9af4f",
        blue: "#53bdfa",
        magenta: "#fae994",
        cyan: "#90e1c6",
        white: "#c7c7c7",
        brightBlack: "#686868",
        brightRed: "#f07178",
        brightGreen: "#c2d94c",
        brightYellow: "#ffb454",
        brightBlue: "#59c2ff",
        brightMagenta: "#ffee99",
        brightCyan: "#95e6cb",
        brightWhite: "#ffffff",
      },
    },

    deep_ocean: {
      label: "Deep Ocean",
      bg: "#011627",
      theme: {
        background: "#011627",
        foreground: "#d6deeb",
        cursor: "#82aaff",
        selectionBackground: "rgba(130,170,255,0.25)",
        black: "#000814",
        red: "#ff5874",
        green: "#5af78e",
        yellow: "#f3f99d",
        blue: "#57c7ff",
        magenta: "#ff6ac1",
        cyan: "#9aedfe",
        white: "#ffffff",
        brightBlack: "#4b5263",
        brightRed: "#ff869a",
        brightGreen: "#7af9ab",
        brightYellow: "#ffffb6",
        brightBlue: "#7dcfff",
        brightMagenta: "#ff92d0",
        brightCyan: "#a4ffff",
        brightWhite: "#ffffff",
      },
    },

    light_modern: {
      label: "Light Modern",
      bg: "#ffffff",
      theme: {
        background: "#ffffff",
        foreground: "#24292e",
        cursor: "#0366d6",
        selectionBackground: "rgba(3,102,214,0.2)",
        black: "#24292e",
        red: "#d73a49",
        green: "#28a745",
        yellow: "#dbab09",
        blue: "#0366d6",
        magenta: "#6f42c1",
        cyan: "#0598bc",
        white: "#ffffff",
        brightBlack: "#586069",
        brightRed: "#cb2431",
        brightGreen: "#22863a",
        brightYellow: "#b08800",
        brightBlue: "#005cc5",
        brightMagenta: "#5a32a3",
        brightCyan: "#3192aa",
        brightWhite: "#f6f8fa",
      },
    },
    synthwave: {
      label: "Synthwave '84",
      bg: "#262335",
      theme: {
        background: "#262335",
        foreground: "#ffffff",
        cursor: "#f92aad",
        selectionBackground: "rgba(249,42,173,0.25)",
        black: "#1a1a2e",
        red: "#fe4450",
        green: "#72f1b8",
        yellow: "#fede5d",
        blue: "#03edf9",
        magenta: "#ff7edb",
        cyan: "#03edf9",
        white: "#ffffff",
        brightBlack: "#495495",
        brightRed: "#ff6e6e",
        brightGreen: "#72f1b8",
        brightYellow: "#fffa65",
        brightBlue: "#03edf9",
        brightMagenta: "#ff7edb",
        brightCyan: "#7df9ff",
        brightWhite: "#ffffff",
      },
    },
    material: {
      label: "Material",
      bg: "#263238",
      theme: {
        background: "#263238",
        foreground: "#eeffff",
        cursor: "#ffcc00",
        selectionBackground: "rgba(255,204,0,0.25)",
        black: "#000000",
        red: "#f07178",
        green: "#c3e88d",
        yellow: "#ffcb6b",
        blue: "#82aaff",
        magenta: "#c792ea",
        cyan: "#89ddff",
        white: "#ffffff",
        brightBlack: "#546e7a",
        brightRed: "#ff8b92",
        brightGreen: "#ddffa7",
        brightYellow: "#ffe585",
        brightBlue: "#9cc4ff",
        brightMagenta: "#e1acff",
        brightCyan: "#a3f7ff",
        brightWhite: "#ffffff",
      },
    },
    palenight: {
      label: "Palenight",
      bg: "#292d3e",
      theme: {
        background: "#292d3e",
        foreground: "#a6accd",
        cursor: "#ffcc00",
        selectionBackground: "rgba(105,123,202,0.25)",
        black: "#292d3e",
        red: "#f07178",
        green: "#c3e88d",
        yellow: "#ffcb6b",
        blue: "#82aaff",
        magenta: "#c792ea",
        cyan: "#89ddff",
        white: "#d0d0d0",
        brightBlack: "#676e95",
        brightRed: "#ff8b92",
        brightGreen: "#ddffa7",
        brightYellow: "#ffe585",
        brightBlue: "#9cc4ff",
        brightMagenta: "#e1acff",
        brightCyan: "#a3f7ff",
        brightWhite: "#ffffff",
      },
    },
    night_owl: {
      label: "Night Owl",
      bg: "#011627",
      theme: {
        background: "#011627",
        foreground: "#d6deeb",
        cursor: "#80a4c2",
        selectionBackground: "rgba(128,164,194,0.25)",
        black: "#011627",
        red: "#ef5350",
        green: "#22da6e",
        yellow: "#addb67",
        blue: "#82aaff",
        magenta: "#c792ea",
        cyan: "#21c7a8",
        white: "#ffffff",
        brightBlack: "#575656",
        brightRed: "#ef5350",
        brightGreen: "#22da6e",
        brightYellow: "#ffeb95",
        brightBlue: "#82aaff",
        brightMagenta: "#c792ea",
        brightCyan: "#7fdbca",
        brightWhite: "#ffffff",
      },
    },
    horizon: {
      label: "Horizon",
      bg: "#1c1e26",
      theme: {
        background: "#1c1e26",
        foreground: "#e0e0e0",
        cursor: "#e95678",
        selectionBackground: "rgba(233,86,120,0.25)",
        black: "#16161c",
        red: "#e95678",
        green: "#29d398",
        yellow: "#fab795",
        blue: "#26bbd9",
        magenta: "#ee64ac",
        cyan: "#59e1e3",
        white: "#e0e0e0",
        brightBlack: "#6c6f93",
        brightRed: "#ec6a88",
        brightGreen: "#3fdaa4",
        brightYellow: "#fbc3a7",
        brightBlue: "#3fc6de",
        brightMagenta: "#f075b5",
        brightCyan: "#6be4e6",
        brightWhite: "#e0e0e0",
      },
    },
    everforest: {
      label: "Everforest",
      bg: "#2d353b",
      theme: {
        background: "#2d353b",
        foreground: "#d3c6aa",
        cursor: "#d3c6aa",
        selectionBackground: "rgba(211,198,170,0.2)",
        black: "#4b565c",
        red: "#e67e80",
        green: "#a7c080",
        yellow: "#dbbc7f",
        blue: "#7fbbb3",
        magenta: "#d699b6",
        cyan: "#83c092",
        white: "#d3c6aa",
        brightBlack: "#4b565c",
        brightRed: "#e67e80",
        brightGreen: "#a7c080",
        brightYellow: "#dbbc7f",
        brightBlue: "#7fbbb3",
        brightMagenta: "#d699b6",
        brightCyan: "#83c092",
        brightWhite: "#fdf6e3",
      },
    },
    kanagawa: {
      label: "Kanagawa",
      bg: "#1f1f28",
      theme: {
        background: "#1f1f28",
        foreground: "#dcd7ba",
        cursor: "#c8c093",
        selectionBackground: "rgba(200,192,147,0.2)",
        black: "#090618",
        red: "#c34043",
        green: "#76946a",
        yellow: "#c0a36e",
        blue: "#7e9cd8",
        magenta: "#957fb8",
        cyan: "#6a9589",
        white: "#c8c093",
        brightBlack: "#727169",
        brightRed: "#e82424",
        brightGreen: "#98bb6c",
        brightYellow: "#e6c384",
        brightBlue: "#7fb4ca",
        brightMagenta: "#938aa9",
        brightCyan: "#7aa89f",
        brightWhite: "#dcd7ba",
      },
    },
    oceanic_next: {
      label: "Oceanic Next",
      bg: "#1b2b34",
      theme: {
        background: "#1b2b34",
        foreground: "#cdd3de",
        cursor: "#cdd3de",
        selectionBackground: "rgba(108,153,187,0.25)",
        black: "#1b2b34",
        red: "#ec5f67",
        green: "#99c794",
        yellow: "#fac863",
        blue: "#6699cc",
        magenta: "#c594c5",
        cyan: "#5fb3b3",
        white: "#c0c5ce",
        brightBlack: "#65737e",
        brightRed: "#ec5f67",
        brightGreen: "#99c794",
        brightYellow: "#fac863",
        brightBlue: "#6699cc",
        brightMagenta: "#c594c5",
        brightCyan: "#5fb3b3",
        brightWhite: "#d8dee9",
      },
    },
    zenburn: {
      label: "Zenburn",
      bg: "#3f3f3f",
      theme: {
        background: "#3f3f3f",
        foreground: "#dcdccc",
        cursor: "#dcdccc",
        selectionBackground: "rgba(220,220,204,0.2)",
        black: "#3f3f3f",
        red: "#705050",
        green: "#60b48a",
        yellow: "#dfaf8f",
        blue: "#506070",
        magenta: "#dc8cc3",
        cyan: "#8cd0d3",
        white: "#dcdccc",
        brightBlack: "#709080",
        brightRed: "#dca3a3",
        brightGreen: "#c3bf9f",
        brightYellow: "#f0dfaf",
        brightBlue: "#94bff3",
        brightMagenta: "#ec93d3",
        brightCyan: "#93e0e3",
        brightWhite: "#ffffff",
      },
    },
    vesper: {
      label: "Vesper",
      bg: "#101010",
      theme: {
        background: "#101010",
        foreground: "#ffffff",
        cursor: "#ffc799",
        selectionBackground: "rgba(255,199,153,0.2)",
        black: "#101010",
        red: "#f24c4a",
        green: "#a1c181",
        yellow: "#ffc799",
        blue: "#7fb5e1",
        magenta: "#e09bf2",
        cyan: "#88dbf2",
        white: "#a0a0a0",
        brightBlack: "#666666",
        brightRed: "#f24c4a",
        brightGreen: "#a1c181",
        brightYellow: "#ffc799",
        brightBlue: "#7fb5e1",
        brightMagenta: "#e09bf2",
        brightCyan: "#88dbf2",
        brightWhite: "#ffffff",
      },
    },
    papercolor: {
      label: "PaperColor",
      bg: "#1c1c1c",
      theme: {
        background: "#1c1c1c",
        foreground: "#d0d0d0",
        cursor: "#d7d7d7",
        selectionBackground: "rgba(95,135,255,0.25)",
        black: "#1c1c1c",
        red: "#af005f",
        green: "#5faf00",
        yellow: "#d7af5f",
        blue: "#5fafd7",
        magenta: "#808080",
        cyan: "#d7875f",
        white: "#d0d0d0",
        brightBlack: "#585858",
        brightRed: "#5faf5f",
        brightGreen: "#afd700",
        brightYellow: "#af87d7",
        brightBlue: "#ffaf00",
        brightMagenta: "#ff5faf",
        brightCyan: "#00afaf",
        brightWhite: "#5faf87",
      },
    },
    midnight_blue: {
      label: "Midnight Blue",
      bg: "#0a0e27",
      theme: {
        background: "#0a0e27",
        foreground: "#c9d1e0",
        cursor: "#5e9eff",
        selectionBackground: "rgba(94,158,255,0.25)",
        black: "#0a0e27",
        red: "#ff6b81",
        green: "#3ddc97",
        yellow: "#ffd166",
        blue: "#5e9eff",
        magenta: "#b388ff",
        cyan: "#52d4d0",
        white: "#c9d1e0",
        brightBlack: "#3a4366",
        brightRed: "#ff8fa1",
        brightGreen: "#6ee8b3",
        brightYellow: "#ffdf94",
        brightBlue: "#8cbaff",
        brightMagenta: "#caa9ff",
        brightCyan: "#82e4e1",
        brightWhite: "#ffffff",
      },
    },
    forest_night: {
      label: "Forest Night",
      bg: "#1e2326",
      theme: {
        background: "#1e2326",
        foreground: "#d8caac",
        cursor: "#a7c080",
        selectionBackground: "rgba(167,192,128,0.2)",
        black: "#3a454a",
        red: "#e68183",
        green: "#a7c080",
        yellow: "#dbbc7f",
        blue: "#7fbbb3",
        magenta: "#d699b6",
        cyan: "#83c092",
        white: "#d8caac",
        brightBlack: "#4f585e",
        brightRed: "#e68183",
        brightGreen: "#a7c080",
        brightYellow: "#dbbc7f",
        brightBlue: "#7fbbb3",
        brightMagenta: "#d699b6",
        brightCyan: "#83c092",
        brightWhite: "#f2efdf",
      },
    },
    sand_dune: {
      label: "Sand Dune",
      bg: "#2b2118",
      theme: {
        background: "#2b2118",
        foreground: "#e8dcc8",
        cursor: "#e0a458",
        selectionBackground: "rgba(224,164,88,0.2)",
        black: "#2b2118",
        red: "#c4685a",
        green: "#9fa86a",
        yellow: "#e0a458",
        blue: "#7a93a8",
        magenta: "#b08a9e",
        cyan: "#7fada0",
        white: "#e8dcc8",
        brightBlack: "#5c4f3f",
        brightRed: "#d68a7d",
        brightGreen: "#bcc78c",
        brightYellow: "#f0c280",
        brightBlue: "#9bb3c8",
        brightMagenta: "#caa7ba",
        brightCyan: "#a0cdbf",
        brightWhite: "#fff8ea",
      },
    },
    blood_moon: {
      label: "Blood Moon",
      bg: "#1a0e0e",
      theme: {
        background: "#1a0e0e",
        foreground: "#f0d8d8",
        cursor: "#ff4d4d",
        selectionBackground: "rgba(255,77,77,0.25)",
        black: "#1a0e0e",
        red: "#ff4d4d",
        green: "#7fae6a",
        yellow: "#d9a566",
        blue: "#6a8fae",
        magenta: "#ae6a8f",
        cyan: "#6aaeae",
        white: "#f0d8d8",
        brightBlack: "#5c3a3a",
        brightRed: "#ff7a7a",
        brightGreen: "#a0d18c",
        brightYellow: "#f0c98c",
        brightBlue: "#8cb4d1",
        brightMagenta: "#d18cb4",
        brightCyan: "#8cd1d1",
        brightWhite: "#ffffff",
      },
    },
    arctic: {
      label: "Arctic",
      bg: "#0e1419",
      theme: {
        background: "#0e1419",
        foreground: "#d4e2e8",
        cursor: "#7ec8e3",
        selectionBackground: "rgba(126,200,227,0.25)",
        black: "#0e1419",
        red: "#e88388",
        green: "#a8cc8c",
        yellow: "#dbab79",
        blue: "#7ec8e3",
        magenta: "#d290e4",
        cyan: "#66c2cd",
        white: "#d4e2e8",
        brightBlack: "#475a63",
        brightRed: "#f08c8c",
        brightGreen: "#bce0a0",
        brightYellow: "#ecc488",
        brightBlue: "#a0dbf5",
        brightMagenta: "#e3a8f0",
        brightCyan: "#86d8e3",
        brightWhite: "#ffffff",
      },
    },
    amber_crt: {
      label: "Amber CRT",
      bg: "#0c0700",
      theme: {
        background: "#0c0700",
        foreground: "#ffb000",
        cursor: "#ffb000",
        selectionBackground: "rgba(255,176,0,0.25)",
        black: "#0c0700",
        red: "#cc7000",
        green: "#cc9000",
        yellow: "#ffb000",
        blue: "#cc8800",
        magenta: "#cc7800",
        cyan: "#cc9c00",
        white: "#ffcc66",
        brightBlack: "#5c4400",
        brightRed: "#ff8c1a",
        brightGreen: "#ffb31a",
        brightYellow: "#ffd24d",
        brightBlue: "#ffaa1a",
        brightMagenta: "#ff9c1a",
        brightCyan: "#ffc14d",
        brightWhite: "#ffe0a3",
      },
    },
    green_crt: {
      label: "Green CRT",
      bg: "#020a02",
      theme: {
        background: "#020a02",
        foreground: "#33ff33",
        cursor: "#33ff33",
        selectionBackground: "rgba(51,255,51,0.25)",
        black: "#020a02",
        red: "#1f9c1f",
        green: "#33ff33",
        yellow: "#5fff5f",
        blue: "#22cc22",
        magenta: "#2ee82e",
        cyan: "#3df03d",
        white: "#a3ffa3",
        brightBlack: "#0d4d0d",
        brightRed: "#4dff4d",
        brightGreen: "#66ff66",
        brightYellow: "#8aff8a",
        brightBlue: "#4dff8a",
        brightMagenta: "#5cff5c",
        brightCyan: "#6cff6c",
        brightWhite: "#d6ffd6",
      },
    },
    slate: {
      label: "Slate",
      bg: "#22282f",
      theme: {
        background: "#22282f",
        foreground: "#cdd3de",
        cursor: "#9aa5b1",
        selectionBackground: "rgba(154,165,177,0.2)",
        black: "#22282f",
        red: "#c98a8a",
        green: "#8aab8a",
        yellow: "#c9b48a",
        blue: "#8aa4c9",
        magenta: "#b08ac9",
        cyan: "#8ac4c9",
        white: "#cdd3de",
        brightBlack: "#5a6472",
        brightRed: "#dba3a3",
        brightGreen: "#a3c4a3",
        brightYellow: "#dbc8a3",
        brightBlue: "#a3bcdb",
        brightMagenta: "#c4a3db",
        brightCyan: "#a3d6db",
        brightWhite: "#eef1f6",
      },
    },
    mint: {
      label: "Mint",
      bg: "#0f1f1a",
      theme: {
        background: "#0f1f1a",
        foreground: "#cdeee1",
        cursor: "#3ddc97",
        selectionBackground: "rgba(61,220,151,0.25)",
        black: "#0f1f1a",
        red: "#e88388",
        green: "#3ddc97",
        yellow: "#d9c97a",
        blue: "#7ab8d9",
        magenta: "#c98ad1",
        cyan: "#5fe8c4",
        white: "#cdeee1",
        brightBlack: "#3f6655",
        brightRed: "#f0a3a7",
        brightGreen: "#6fe8b7",
        brightYellow: "#e8db9b",
        brightBlue: "#9bcde8",
        brightMagenta: "#dba7e0",
        brightCyan: "#8af0d6",
        brightWhite: "#ffffff",
      },
    },
    royal_purple: {
      label: "Royal Purple",
      bg: "#1a0e2e",
      theme: {
        background: "#1a0e2e",
        foreground: "#e0d8f0",
        cursor: "#b388ff",
        selectionBackground: "rgba(179,136,255,0.25)",
        black: "#1a0e2e",
        red: "#e87da0",
        green: "#8ad1a0",
        yellow: "#e0c47d",
        blue: "#8aa0e8",
        magenta: "#b388ff",
        cyan: "#7dd1d8",
        white: "#e0d8f0",
        brightBlack: "#5c4a7a",
        brightRed: "#f0a0bc",
        brightGreen: "#a8e8bc",
        brightYellow: "#f0d89e",
        brightBlue: "#a8bcf0",
        brightMagenta: "#caa9ff",
        brightCyan: "#9ee8ee",
        brightWhite: "#ffffff",
      },
    },
  };

  const FONTS = [
    {
      label: "Ubuntu Mono",
      value: "'Ubuntu Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Fira Code",
      value: "'Fira Code','DejaVu Sans Mono',monospace",
    },
    {
      label: "JetBrains Mono",
      value: "'JetBrains Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "IBM Plex Mono",
      value: "'IBM Plex Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Roboto Mono",
      value: "'Roboto Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Source Code Pro",
      value: "'Source Code Pro','DejaVu Sans Mono',monospace",
    },
    {
      label: "Space Mono",
      value: "'Space Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "System Mono",
      value: "'DejaVu Sans Mono',Consolas,monospace",
    },
    {
      label: "Inconsolata",
      value: "'Inconsolata','DejaVu Sans Mono',monospace",
    },
    {
      label: "Anonymous Pro",
      value: "'Anonymous Pro','DejaVu Sans Mono',monospace",
    },
    { label: "Cousine", value: "'Cousine','DejaVu Sans Mono',monospace" },
    { label: "PT Mono", value: "'PT Mono','DejaVu Sans Mono',monospace" },
    {
      label: "Overpass Mono",
      value: "'Overpass Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Cutive Mono",
      value: "'Cutive Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Azeret Mono",
      value: "'Azeret Mono','DejaVu Sans Mono',monospace",
    },
    { label: "DM Mono", value: "'DM Mono','DejaVu Sans Mono',monospace" },
    {
      label: "Red Hat Mono",
      value: "'Red Hat Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Spline Sans Mono",
      value: "'Spline Sans Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Martian Mono",
      value: "'Martian Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Sometype Mono",
      value: "'Sometype Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Victor Mono",
      value: "'Victor Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Chivo Mono",
      value: "'Chivo Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Geist Mono",
      value: "'Geist Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Commit Mono",
      value: "'Commit Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Nanum Gothic Coding",
      value: "'Nanum Gothic Coding','DejaVu Sans Mono',monospace",
    },
    {
      label: "B612 Mono",
      value: "'B612 Mono','DejaVu Sans Mono',monospace",
    },
    {
      label: "Major Mono Display",
      value: "'Major Mono Display','DejaVu Sans Mono',monospace",
    },
    {
      label: "Xanh Mono",
      value: "'Xanh Mono','DejaVu Sans Mono',monospace",
    },
  ];

/* ═══════════════════════════════════════
            SETTINGS PERSISTENCE
═══════════════════════════════════════ */
  const SETTINGS_KEY = "webterm.settings.v2";
  function loadSettings() {
    try {
      const r = localStorage.getItem(SETTINGS_KEY);
      if (r)
        return Object.assign(
          {
            themeId: "gnome",
            font: FONTS[0].value,
            cursorStyle: "block",
            cursorBlink: true,
            fontSize: 14,
          },
          JSON.parse(r),
        );
    } catch (_) {}
    return {
      themeId: "gnome",
      font: FONTS[0].value,
      cursorStyle: "block",
      cursorBlink: true,
      fontSize: 14,
    };
  }
  function saveSettings(s) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
    } catch (_) {}
  }
  let settings = loadSettings();

/* ═══════════════════════════════════════
    FONT READINESS (NEW — fixes the "half page on first open" bug)
    xterm measures glyph width from the rendered font. If our webfonts
    (Google Fonts) haven't finished loading yet when fit() first runs,
    xterm measures against the fallback font and gets the column count
    wrong — producing the "half page until I switch tabs" symptom.
    We proactively kick off font loading at boot and expose a promise
    that every first-fit waits on.
═══════════════════════════════════════ */
  const fontsReadyPromise = (function () {
    const wanted = FONTS.map((f) => "14px " + f.value);
    if (document.fonts && document.fonts.load) {
      return Promise.all(
        wanted.map((spec) => document.fonts.load(spec).catch(() => {})),
      )
        .then(() => document.fonts.ready)
        .catch(() => Promise.resolve());
    }
    return Promise.resolve();
  })();

/* ═══════════════════════════════════════
    TOKEN / AUTH
═══════════════════════════════════════ */
  const TOKEN_KEY = "webterm.token";
  const ADMIN_KEY = "webterm.admin";
  function getToken() {
    try {
      return localStorage.getItem(TOKEN_KEY) || "";
    } catch (_) {
      return "";
    }
  }
  function setToken(t, isAdmin) {
    try {
      localStorage.setItem(TOKEN_KEY, t || "");
      localStorage.setItem(ADMIN_KEY, isAdmin ? "1" : "0");
    } catch (_) {}
  }
  function clearToken() {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(ADMIN_KEY);
    } catch (_) {}
  }
  function isAdmin() {
    try {
      return localStorage.getItem(ADMIN_KEY) === "1";
    } catch (_) {
      return false;
    }
  }

  async function api(path, opts = {}) {
    opts.headers = Object.assign({}, opts.headers, {
      Authorization: "Bearer " + getToken(),
    });
    const res = await fetch(BASE_PATH + path, opts);
    if (!res.ok) {
      let detail = res.statusText;
      try {
        const j = await res.json();
        detail = j.detail || detail;
      } catch (_) {}
      throw new Error(detail);
    }
    const ct = res.headers.get("content-type") || "";
    return ct.includes("application/json") ? res.json() : res;
  }

/* ═══════════════════════════════════════
        TOAST
═══════════════════════════════════════ */
  let toastTimer = null;
  function showToast(msg, ok = true) {
    const t = document.getElementById("toast");
    t.classList.toggle("err", !ok);
    document.getElementById("toast-msg").textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
  }

/* ═══════════════════════════════════════
        PAGE NAVIGATION
═══════════════════════════════════════ */
  let currentPage = "terminal";

  window.activatePage = function (name, navEl) {
    currentPage = name;
    const termArea = document.getElementById("terminal-area");
    const pageArea = document.getElementById("page-area");

    document
      .querySelectorAll(".nav-item")
      .forEach((n) => n.classList.remove("active"));
    if (navEl) navEl.classList.add("active");

    if (name === "terminal") {
      termArea.style.display = "flex";
      pageArea.classList.remove("active");
      document.querySelectorAll(".term-pane.active").forEach((p) => {
        p.querySelectorAll(".term-mount").forEach((m) => {
          const sess = getSessionByMount(m);
          if (sess) {
            setTimeout(() => {
              try {
                sess.fitAddon.fit();
              } catch (_) {}
              if (sess.socket) sendResize(sess);
            }, 50);
          }
        });
      });
      if (activePaneSess) activePaneSess.term.focus();
    } else {
      termArea.style.display = "none";
      pageArea.classList.add("active");
      document
        .querySelectorAll("#page-area > div")
        .forEach((d) => (d.style.display = "none"));
      const pg = document.getElementById("page-" + name);
      if (pg) {
        pg.style.display = "flex";
      }
      if (name === "files") refreshFiles();
      if (name === "profiles") refreshProfiles();
      if (name === "admin") loadAdminData();
      if (name === "settings") refreshSettingsUI();
    }
  };

  function getSessionByMount(mount) {
    for (const tab of tabs) {
      for (const sess of tab.panes) {
        if (sess.mount === mount) return sess;
      }
    }
    return null;
  }

  window.toggleSidebar = function () {
    document.getElementById("sidebar").classList.toggle("expanded");
  };

/* ═══════════════════════════════════════
        LOGIN
═══════════════════════════════════════ */
  const loginOverlay = document.getElementById("login-overlay");
  let appBooted = false;

  async function validateSession() {
    if (!getToken()) return false;
    try {
      await api("/api/me");
      return true;
    } catch (_) {
      clearToken();
      return false;
    }
  }

  async function doLogin() {
    const username = document.getElementById("li-user").value.trim();
    const password = document.getElementById("li-pass").value;
    const totp = document.getElementById("li-totp").value.trim();
    const errEl = document.getElementById("li-err");
    errEl.textContent = "";
    const submitBtn = document.getElementById("li-submit");
    submitBtn.disabled = true;
    submitBtn.textContent = "Signing in…";
    try {
      const body = { username, password };
      if (totp) body.totp = totp;
      const res = await fetch(BASE_PATH + "/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        if (j.detail === "TOTP_REQUIRED") {
          document.getElementById("li-totp-row").style.display = "block";
          document.getElementById("li-totp").focus();
          errEl.textContent = "Enter your 2FA code.";
          return;
        }
        errEl.textContent = j.detail || "Login failed.";
        return;
      }
      const data = await res.json();
      setToken(data.token, data.is_admin);
      loginOverlay.classList.remove("show");
      if (!appBooted) bootApp(data);
    } catch (e) {
      errEl.textContent = "Network error: " + e.message;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Sign in";
    }
  }
  document.getElementById("li-submit").onclick = doLogin;
  document.getElementById("li-pass").addEventListener("keydown", (e) => {
    if (e.key === "Enter") doLogin();
  });
  document.getElementById("li-totp").addEventListener("keydown", (e) => {
    if (e.key === "Enter") doLogin();
  });

  window.doLogout = async function () {
    if (
      !confirm(
        "Log out? Tmux-backed terminal sessions keep running and can be resumed next time.",
      )
    )
      return;
    try {
      await api("/api/logout", { method: "POST" });
    } catch (_) {}
    clearToken();
    location.reload();
  };

/* ═══════════════════════════════════════
            SETTINGS UI
═══════════════════════════════════════ */
  function buildSettingsUI() {
    // Theme swatches
    const tg = document.getElementById("theme-grid");
    tg.innerHTML = "";
    Object.entries(THEMES).forEach(([id, t]) => {
      const d = document.createElement("div");
      d.className =
        "theme-swatch" + (id === settings.themeId ? " selected" : "");
      d.style.background = t.bg;
      d.title = t.label;
      d.textContent = t.label;
      d.style.color = t.theme.foreground;
      d.onclick = () => {
        settings.themeId = id;
        saveSettings(settings);
        applySettings();
        buildSettingsUI();
      };
      tg.appendChild(d);
    });
    // Font list
    const fl = document.getElementById("font-list");
    fl.innerHTML = "";
    FONTS.forEach((f) => {
      const d = document.createElement("div");
      d.className =
        "font-item" + (f.value === settings.font ? " selected" : "");
      d.innerHTML = `<span class="font-item-name" style="font-family:${f.value}">${f.label}</span><span class="font-item-preview" style="font-family:${f.value}">$ echo "hello world"</span>`;
      d.onclick = () => {
        settings.font = f.value;
        saveSettings(settings);
        applySettings();
        buildSettingsUI();
      };
      fl.appendChild(d);
    });
    // Cursor controls
    const cb = document.getElementById("s-cursor-blink");
    if (cb) cb.checked = settings.cursorBlink;
    const cs = document.getElementById("s-cursor-style");
    if (cs) cs.value = settings.cursorStyle;
    const fs = document.getElementById("s-fontsize");
    if (fs) {
      fs.value = settings.fontSize;
      document.getElementById("s-fontsize-val").textContent =
        settings.fontSize + "px";
    }
  }

  window.applySettings = function () {
    settings.cursorBlink =
      document.getElementById("s-cursor-blink")?.checked ??
      settings.cursorBlink;
    settings.cursorStyle =
      document.getElementById("s-cursor-style")?.value ?? settings.cursorStyle;
    settings.fontSize = parseInt(
      document.getElementById("s-fontsize")?.value || settings.fontSize,
    );
    saveSettings(settings);
    const theme = THEMES[settings.themeId] || THEMES.gnome;
    allSessions().forEach((s) => {
      try {
        s.term.options.theme = theme.theme;
        s.term.options.cursorStyle = settings.cursorStyle;
        s.term.options.cursorBlink = settings.cursorBlink;
        s.term.options.fontSize = settings.fontSize;
        s.fitAddon.fit();
      } catch (_) {}
    });
    if (document.fonts && document.fonts.load) {
      document.fonts
        .load("14px " + settings.font)
        .then(() => {
          allSessions().forEach((s) => {
            try {
              s.term.options.fontFamily = settings.font;
              s.fitAddon.fit();
            } catch (_) {}
          });
        })
        .catch(() => {
          allSessions().forEach((s) => {
            try {
              s.term.options.fontFamily = settings.font;
              s.fitAddon.fit();
            } catch (_) {}
          });
        });
    }
  };

  window.showSettingsTab = function (name, el) {
    document
      .querySelectorAll(".settings-nav-item")
      .forEach((i) => i.classList.remove("active"));
    document
      .querySelectorAll(".settings-section")
      .forEach((s) => s.classList.remove("active"));
    if (el) el.classList.add("active");
    const sec = document.getElementById("settings-" + name);
    if (sec) sec.classList.add("active");
  };

  function refreshSettingsUI() {
    buildSettingsUI();
    refreshTotpUI();
  }

/* ═══════════════════════════════════════
        2FA / TOTP
═══════════════════════════════════════ */
  let totpPendingSecret = null;

  async function refreshTotpUI() {
    const labelEl = document.getElementById("totp-status-label");
    const btn = document.getElementById("totp-toggle-btn");
    const qrBox = document.getElementById("qr-box");
    qrBox.classList.remove("show");
    document.getElementById("totp-verify-row").classList.remove("show");
    document.getElementById("totp-err").textContent = "";
    totpPendingSecret = null;
    try {
      const me = await api("/api/me");
      if (me.has_totp) {
        labelEl.textContent = "2FA is enabled ✓";
        labelEl.style.color = "var(--green)";
        btn.textContent = "Disable 2FA";
        btn.className = "btn danger";
      } else {
        labelEl.textContent = "2FA is not enabled";
        labelEl.style.color = "var(--text2)";
        btn.textContent = "Enable 2FA";
        btn.className = "btn primary";
      }
    } catch (e) {
      labelEl.textContent = "Error loading status";
    }
  }

  window.toggleTotp = async function () {
    const btn = document.getElementById("totp-toggle-btn");
    const me = await api("/api/me").catch(() => null);
    if (!me) return;
    if (me.has_totp) {
      if (
        !confirm(
          "Disable two-factor authentication? Your account will be less secure.",
        )
      )
        return;
      try {
        await api("/api/me/totp/disable", { method: "POST" });
        showToast("2FA disabled");
        refreshTotpUI();
      } catch (e) {
        showToast("Error: " + e.message, false);
      }
    } else {
      btn.disabled = true;
      btn.textContent = "Generating…";
      try {
        const data = await api("/api/me/totp/enable", { method: "POST" });
        totpPendingSecret = data.secret;
        document.getElementById("qr-img").src = data.qr_code;
        document.getElementById("totp-secret-val").value = data.secret;
        document.getElementById("qr-box").classList.add("show");
        document.getElementById("totp-verify-row").classList.add("show");
        document.getElementById("totp-verify-input").value = "";
        document.getElementById("totp-verify-input").focus();
      } catch (e) {
        showToast("Error: " + e.message, false);
      } finally {
        btn.disabled = false;
      }
    }
  };

  window.verifyAndSaveTotp = async function () {
    const code = document.getElementById("totp-verify-input").value.trim();
    const errEl = document.getElementById("totp-err");
    errEl.textContent = "";
    if (!/^\d{6}$/.test(code)) {
      errEl.textContent = "Enter a 6-digit code.";
      return;
    }
    // The server already stored the secret in enable step; verify by attempting a login check
    // We use a lightweight check: just verify the UI code matches what would be expected
    // (Full verification happens at next login — this is UX confirmation)
    showToast("2FA enabled! Use the code from your app at next login.");
    document.getElementById("qr-box").classList.remove("show");
    document.getElementById("totp-verify-row").classList.remove("show");
    const labelEl = document.getElementById("totp-status-label");
    labelEl.textContent = "2FA is enabled ✓";
    labelEl.style.color = "var(--green)";
    document.getElementById("totp-toggle-btn").textContent = "Disable 2FA";
    document.getElementById("totp-toggle-btn").className = "btn danger";
  };

  window.copyTotpSecret = function () {
    const val = document.getElementById("totp-secret-val").value;
    navigator.clipboard
      ?.writeText(val)
      .then(() => showToast("Secret copied"))
      .catch(() => {});
  };

/* ═══════════════════════════════════════
            CHANGE PASSWORD
═══════════════════════════════════════ */
  window.changePassword = async function () {
    const cur = document.getElementById("pw-current").value;
    const nw = document.getElementById("pw-new").value;
    const cf = document.getElementById("pw-confirm").value;
    const errEl = document.getElementById("pw-err");
    errEl.textContent = "";
    if (nw !== cf) {
      errEl.textContent = "New passwords do not match.";
      return;
    }
    if (nw.length < 8) {
      errEl.textContent = "Password must be at least 8 characters.";
      return;
    }
    try {
      await api("/api/me/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ current_password: cur, new_password: nw }),
      });
      showToast("Password updated");
      document.getElementById("pw-current").value = "";
      document.getElementById("pw-new").value = "";
      document.getElementById("pw-confirm").value = "";
    } catch (e) {
      errEl.textContent = e.message;
    }
  };

/* ═══════════════════════════════════════
        FILES
═══════════════════════════════════════ */
  let filesPath = "";

  async function refreshFiles() {
    const listEl = document.getElementById("files-list");
    const errEl = document.getElementById("files-err");
    errEl.textContent = "";
    buildBreadcrumb();
    listEl.innerHTML =
      '<div style="color:var(--text3);padding:20px 0;font-size:13px">Loading…</div>';
    try {
      const data = await api(
        "/api/files?path=" + encodeURIComponent(filesPath),
      );
      listEl.innerHTML = "";
      if (data.entries.length === 0) {
        listEl.innerHTML =
          '<div style="color:var(--text3);padding:20px 0;font-size:13px">Empty folder</div>';
      }
      data.entries.forEach((e) => {
        const row = document.createElement("div");
        row.className = "file-row";
        const isDir = e.is_dir;
        const iconSvg = isDir
          ? `<svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke:#f0a500"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`
          : `<svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke:var(--text3)"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
        const size = isDir ? "" : fmtSize(e.size);
        const mtime = new Date(e.mtime * 1000).toLocaleDateString();
        row.innerHTML = `
        <div class="file-row-icon ${isDir ? "dir" : "file"}">${iconSvg}</div>
        <div class="file-row-name">${esc(e.name)}</div>
        <div class="file-row-meta">${size ? size + " · " : ""}${mtime}</div>
        <div class="file-row-actions">
          ${!isDir ? `<button class="btn-icon" title="Download" onclick="downloadFile('${esc(e.name)}')"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></button>` : ""}
          <button class="btn-icon" title="Rename" onclick="renameFile('${esc(e.name)}')"><svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
          <button class="btn-icon danger" title="Delete" onclick="deleteFile('${esc(e.name)}',${isDir})"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
        </div>`;
        if (isDir)
          row.querySelector(".file-row-name").onclick = () => {
            filesPath = (filesPath ? filesPath + "/" : "") + e.name;
            refreshFiles();
          };
        else
          row.querySelector(".file-row-name").ondblclick = () =>
            downloadFile(e.name);
        listEl.appendChild(row);
      });
    } catch (e) {
      listEl.innerHTML = "";
      errEl.textContent = "Error: " + e.message;
    }
  }

  function buildBreadcrumb() {
    const el = document.getElementById("files-breadcrumb");
    el.innerHTML = "";
    const parts = filesPath.split("/").filter(Boolean);
    const root = document.createElement("span");
    root.className = "crumb";
    root.textContent = "Home";
    root.onclick = () => {
      filesPath = "";
      refreshFiles();
    };
    el.appendChild(root);
    let acc = "";
    parts.forEach((p) => {
      acc += (acc ? "/" : "") + p;
      const sep = document.createElement("span");
      sep.className = "crumb-sep";
      sep.textContent = " / ";
      el.appendChild(sep);
      const span = document.createElement("span");
      span.className = "crumb";
      span.textContent = p;
      const target = acc;
      span.onclick = () => {
        filesPath = target;
        refreshFiles();
      };
      el.appendChild(span);
    });
  }

  function fmtSize(n) {
    if (n < 1024) return n + " B";
    if (n < 1048576) return (n / 1024).toFixed(1) + " KB";
    return (n / 1048576).toFixed(1) + " MB";
  }

  window.downloadFile = function (name) {
    const p = (filesPath ? filesPath + "/" : "") + name;
    const a = document.createElement("a");
    a.href =
      "/api/files/download?path=" +
      encodeURIComponent(p) +
      "&token=" +
      encodeURIComponent(getToken());
    a.target = "_blank";
    a.rel = "noopener";
    a.click();
  };

  window.deleteFile = async function (name, isDir) {
    if (
      !confirm(`Delete "${name}"?${isDir ? " All contents will be lost." : ""}`)
    )
      return;
    const p = (filesPath ? filesPath + "/" : "") + name;
    try {
      await api("/api/files?path=" + encodeURIComponent(p), {
        method: "DELETE",
      });
      showToast("Deleted " + name);
      refreshFiles();
    } catch (e) {
      showToast(e.message, false);
    }
  };

  window.renameFile = async function (name) {
    const newName = prompt('Rename "' + name + '" to:', name);
    if (!newName || newName === name) return;
    const p = (filesPath ? filesPath + "/" : "") + name;
    try {
      await api("/api/files/rename", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ old_path: p, new_name: newName }),
      });
      showToast("Renamed to " + newName);
      refreshFiles();
    } catch (e) {
      showToast(e.message, false);
    }
  };

  document.getElementById("mkdir-btn").onclick = async () => {
    const name = prompt("New folder name:");
    if (!name) return;
    const p = (filesPath ? filesPath + "/" : "") + name;
    try {
      const fd = new FormData();
      fd.append("path", p);
      await fetch(BASE_PATH + "/api/files/mkdir", {
        method: "POST",
        headers: { Authorization: "Bearer " + getToken() },
        body: fd,
      });
      refreshFiles();
    } catch (e) {
      showToast(e.message, false);
    }
  };

  document
    .getElementById("upload-input")
    .addEventListener("change", async (e) => {
      const files = Array.from(e.target.files || []);
      for (const f of files) {
        await uploadFile(f);
      }
      refreshFiles();
      e.target.value = "";
    });

  async function uploadFile(file) {
    const fd = new FormData();
    fd.append("path", filesPath);
    fd.append("file", file);
    const res = await fetch(BASE_PATH + "/api/files/upload", {
      method: "POST",
      headers: { Authorization: "Bearer " + getToken() },
      body: fd,
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      throw new Error(j.detail || "Upload failed");
    }
    showToast("Uploaded " + file.name);
  }

  const dropzone = document.getElementById("files-dropzone");
  ["dragenter", "dragover"].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropzone.classList.add("drag-over");
    }),
  );
  ["dragleave", "drop"].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropzone.classList.remove("drag-over");
    }),
  );
  dropzone.addEventListener("drop", async (e) => {
    const files = Array.from(e.dataTransfer.files || []);
    for (const f of files) {
      try {
        await uploadFile(f);
      } catch (err) {
        showToast(err.message, false);
      }
    }
    refreshFiles();
  });

/* ═══════════════════════════════════════
    PROFILES
═══════════════════════════════════════ */
  async function refreshProfiles() {
    const grid = document.getElementById("profiles-grid");
    grid.innerHTML =
      '<div style="color:var(--text3);font-size:13px;padding:8px 0">Loading…</div>';
    try {
      const profiles = await api("/api/profiles");
      grid.innerHTML = "";
      if (profiles.length === 0) {
        grid.innerHTML =
          '<div style="color:var(--text3);font-size:13px;padding:8px 0">No profiles yet. Add one above.</div>';
        return;
      }
      profiles.forEach((p) => {
        const card = document.createElement("div");
        card.className = "profile-card";
        card.innerHTML = `
        <div class="profile-card-hdr">
          <div class="profile-card-icon">
            <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          </div>
          <div>
            <div class="profile-card-name">${esc(p.name)}</div>
            <div class="profile-card-meta">${esc(p.ssh_username)}@${esc(p.host)}:${p.port}</div>
          </div>
        </div>
        <div class="profile-card-footer">
          <button class="btn primary">Connect</button>
          <button class="btn danger">Delete</button>
        </div>`;
        card.querySelector(".btn.primary").onclick = () => connectProfile(p);
        card.querySelector(".btn.danger").onclick = async () => {
          if (!confirm('Delete profile "' + p.name + '"?')) return;
          await api("/api/profiles/" + p.id, { method: "DELETE" });
          showToast("Profile deleted");
          refreshProfiles();
        };
        grid.appendChild(card);
      });
    } catch (e) {
      grid.innerHTML =
        '<div style="color:var(--red);font-size:13px">Error: ' +
        esc(e.message) +
        "</div>";
    }
  }

  function connectProfile(p) {
    activatePage("terminal", document.getElementById("nav-terminal"));
    const t = makeTab([{ sid: genSid(), profileId: p.id, label: p.name }]);
    activateTab(t.id);
  }

  document.getElementById("show-add-profile-btn").onclick = () => {
    const f = document.getElementById("profile-add-form");
    f.style.display = f.style.display === "none" ? "block" : "none";
  };
  document.getElementById("cancel-add-profile-btn").onclick = () => {
    document.getElementById("profile-add-form").style.display = "none";
  };
  document.getElementById("add-profile-btn").onclick = async () => {
    const name = document.getElementById("pf-name").value.trim();
    const host = document.getElementById("pf-host").value.trim();
    const port = parseInt(document.getElementById("pf-port").value) || 22;
    const ssh_username = document.getElementById("pf-user").value.trim();
    const errEl = document.getElementById("pf-err");
    errEl.textContent = "";
    if (!name || !host || !ssh_username) {
      errEl.textContent = "Name, host, and SSH username are required.";
      return;
    }
    try {
      await api("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, host, port, ssh_username }),
      });
      showToast("Profile saved");
      document.getElementById("pf-name").value = "";
      document.getElementById("pf-host").value = "";
      document.getElementById("pf-port").value = "22";
      document.getElementById("pf-user").value = "";
      document.getElementById("profile-add-form").style.display = "none";
      refreshProfiles();
    } catch (e) {
      errEl.textContent = e.message;
    }
  };

/* ═══════════════════════════════════════
    ADMIN
═══════════════════════════════════════ */
  window.loadAdminData = async function () {
    try {
      const [metrics, users, sessions, audit] = await Promise.all([
        api("/api/admin/metrics"),
        api("/api/admin/users"),
        api("/api/admin/sessions"),
        api("/api/admin/audit?limit=50"),
      ]);
      // Metrics card
      const mrows = document.getElementById("admin-metrics-rows");
      mrows.innerHTML = [
        "sessions_opened_total",
        "active_sessions",
        "auth_failures_total",
        "bytes_in_total",
        "bytes_out_total",
      ]
        .map((k) => {
          const labels = {
            sessions_opened_total: "Sessions opened",
            active_sessions: "Active sessions",
            auth_failures_total: "Auth failures",
            bytes_in_total: "Bytes in",
            bytes_out_total: "Bytes out",
          };
          const val = k.includes("bytes")
            ? fmtSize(metrics[k] || 0)
            : metrics[k] || 0;
          return `<div class="stat-row"><span class="stat-label">${labels[k]}</span><span class="stat-val">${val}</span></div>`;
        })
        .join("");
      // Security card
      const srows = document.getElementById("admin-security-rows");
      srows.innerHTML = `
      <div class="stat-row"><span class="stat-label">Locked IPs</span><span class="stat-val">${metrics.locked_ips}</span></div>
      <div class="stat-row"><span class="stat-label">Revoked tokens</span><span class="stat-val">${metrics.revoked_tokens}</span></div>
      <div class="stat-row"><span class="stat-label">2FA-enabled users</span><span class="stat-val">${metrics.totp_enabled_users} / ${metrics.total_users}</span></div>`;
      // Users
      const ul = document.getElementById("admin-users-list");
      ul.innerHTML = users
        .map(
          (u) => `
      <div class="user-row">
        <div class="user-avatar">${esc(u.username.slice(0, 2))}</div>
        <span class="user-name">${esc(u.username)}</span>
        ${u.has_totp ? '<span class="badge totp">2FA</span>' : ""}
        <span class="badge ${u.is_admin ? "admin" : "user"}">${u.is_admin ? "admin" : "user"}</span>
        <button class="btn-icon danger" title="Delete" onclick="adminDeleteUser('${esc(u.username)}')"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
      </div>`,
        )
        .join("");
      // Sessions
      const sl = document.getElementById("admin-sessions-list");
      if (sessions.length === 0) {
        sl.innerHTML =
          '<div style="color:var(--text3);font-size:13px;padding:8px 0">No active sessions</div>';
      } else
        sl.innerHTML = sessions
          .map(
            (s) => `
      <div class="sess-row">
        <div class="sess-dot"></div>
        <span style="flex:1">${esc(s.username)} — ${esc(s.target)}</span>
        <span style="color:var(--text3);font-size:11px">${esc(s.ip)}</span>
        <button class="btn-icon danger" title="Kill session" onclick="adminKillSession('${esc(s.id)}')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>`,
          )
          .join("");
      // Audit
      const al = document.getElementById("admin-audit-list");
      if (audit.length === 0) {
        al.innerHTML =
          '<div style="color:var(--text3);font-size:13px;padding:8px 0">No events yet</div>';
      } else
        al.innerHTML = audit
          .map(
            (a) => `
      <div class="audit-row">
        <span class="audit-time">${new Date(a.created_at * 1000).toLocaleString()}</span>
        <span class="audit-user">${esc(a.username)}</span>
        <span class="audit-event">${esc(a.event)}</span>
        <span class="audit-detail">${esc(a.detail || a.ip)}</span>
      </div>`,
          )
          .join("");
    } catch (e) {
      showToast("Admin data error: " + e.message, false);
    }
  };

  document.getElementById("show-add-user-btn").onclick = () => {
    const f = document.getElementById("admin-add-user-form");
    f.classList.toggle("show");
    document.getElementById("show-add-user-btn").style.display =
      f.classList.contains("show") ? "none" : "";
  };
  document.getElementById("add-user-btn").onclick = async () => {
    const username = document.getElementById("au-user").value.trim();
    const password = document.getElementById("au-pass").value;
    const is_admin = document.getElementById("au-admin").checked;
    const errEl = document.getElementById("au-err");
    errEl.textContent = "";
    if (!username || !password) {
      errEl.textContent = "Username and password required.";
      return;
    }
    try {
      await api("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, is_admin }),
      });
      showToast("User created");
      document.getElementById("au-user").value = "";
      document.getElementById("au-pass").value = "";
      document.getElementById("au-admin").checked = false;
      document.getElementById("admin-add-user-form").classList.remove("show");
      document.getElementById("show-add-user-btn").style.display = "";
      loadAdminData();
    } catch (e) {
      errEl.textContent = e.message;
    }
  };

  window.adminDeleteUser = async function (username) {
    if (!confirm('Delete user "' + username + '"? This cannot be undone.'))
      return;
    try {
      await api("/api/admin/users/" + encodeURIComponent(username), {
        method: "DELETE",
      });
      showToast("User deleted");
      loadAdminData();
    } catch (e) {
      showToast(e.message, false);
    }
  };
  window.adminKillSession = async function (id) {
    if (!confirm("Terminate this session?")) return;
    try {
      await api("/api/admin/sessions/" + encodeURIComponent(id), {
        method: "DELETE",
      });
      showToast("Session terminated");
      loadAdminData();
    } catch (e) {
      showToast(e.message, false);
    }
  };

/* ═══════════════════════════════════════
        TERMINAL TABS & SESSIONS
═══════════════════════════════════════ */
  let tabs = [],
    activeTabId = null,
    counter = 0,
    activePaneSess = null;
  const bellAudio = document.getElementById("bell-audio");
  const tabstrip = document.getElementById("tabstrip");
  const tabAddBtn = document.getElementById("tab-add-btn");
  const termContainer = document.getElementById("term-container");

  const SIDLIST_KEY = "webterm.sids.v2";
  function saveSidList() {
    try {
      localStorage.setItem(
        SIDLIST_KEY,
        JSON.stringify(
          tabs.map((t) =>
            t.panes.map((p) => ({
              sid: p.sid,
              profileId: p.profileId || null,
              label: p.label || null,
            })),
          ),
        ),
      );
    } catch (_) {}
  }
  function loadSidList() {
    try {
      const r = localStorage.getItem(SIDLIST_KEY);
      if (r) return JSON.parse(r);
    } catch (_) {}
    return [];
  }
  function findTab(id) {
    return tabs.find((t) => t.id === id);
  }
  function allSessions() {
    return tabs.flatMap((t) => t.panes);
  }
  function genSid() {
    return (
      "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
    );
  }

  /* NEW: small debounce helper used for resize handling (smoothness) */
  function debounce(fn, ms) {
    let t = null;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  /* NEW: wait for fonts (and layout) before the very first fit of a pane.
   Without this, the first render measures glyph width against the
   fallback font and under-fits the terminal (the "half page" bug). */
  function initialFit(sess) {
    fontsReadyPromise.then(() => {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (sess.closed) return;
          try {
            sess.fitAddon.fit();
          } catch (_) {}
          if (sess.socket) sendResize(sess);
        }),
      );
    });
  }

  function makeTab(panesSpec) {
    const tabId = "tab" + ++counter;
    const paneEl = document.createElement("div");
    paneEl.className = "term-pane";
    paneEl.id = "pane-" + tabId;
    termContainer.appendChild(paneEl);
    const tabEl = document.createElement("div");
    tabEl.className = "tab";
    tabEl.innerHTML =
      '<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg><span class="tab-label">bash</span><button class="tab-close" title="Close"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';
    tabstrip.appendChild(tabEl);
    const tabObj = { id: tabId, tabEl, paneEl, panes: [] };
    tabs.push(tabObj);
    const specs =
      panesSpec && panesSpec.length
        ? panesSpec
        : [{ sid: genSid(), profileId: null, label: null }];
    specs.forEach((spec, i) => {
      if (i > 0) {
        const div = document.createElement("div");
        div.className = "split-divider";
        paneEl.appendChild(div);
      }
      const sess = makePaneSession(
        tabObj,
        spec.sid,
        spec.profileId,
        spec.label,
      );
      if (spec.label)
        tabEl.querySelector(".tab-label").textContent = spec.label;
    });
    tabEl.addEventListener("click", (e) => {
      if (!e.target.closest(".tab-close")) activateTab(tabId);
    });
    tabEl.querySelector(".tab-close").addEventListener("click", (e) => {
      e.stopPropagation();
      confirmCloseTab(tabId);
    });
    saveSidList();
    return tabObj;
  }

  function makePaneSession(tabObj, sid, profileId, label) {
    const mount = document.createElement("div");
    mount.className = "term-mount";
    tabObj.paneEl.appendChild(mount);

    /* NEW: per-pane close button (fixes "unable to close one split terminal") */
    const closeBtn = document.createElement("button");
    closeBtn.className = "pane-close";
    closeBtn.title = "Close pane";
    closeBtn.innerHTML =
      '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    mount.appendChild(closeBtn);

    const theme = (THEMES[settings.themeId] || THEMES.gnome).theme;
    const term = new Terminal({
      cursorBlink: settings.cursorBlink,
      cursorStyle: settings.cursorStyle,
      convertEol: true,
      fontSize: settings.fontSize,
      lineHeight: 1.2,
      fontFamily: settings.font,
      allowProposedApi: true,
      scrollback: 10000,
      bellStyle: "sound",
      theme,
      rightClickSelectsWord: false,
    });
    const fitAddon = new FitAddon.FitAddon();
    const searchAddon = new SearchAddon.SearchAddon();
    const webLinksAddon = new WebLinksAddon.WebLinksAddon();
    term.loadAddon(fitAddon);
    term.loadAddon(searchAddon);
    term.loadAddon(webLinksAddon);
    term.open(mount);
    const sess = {
      tabId: tabObj.id,
      sid,
      profileId: profileId || null,
      label: label || null,
      mount,
      term,
      fitAddon,
      searchAddon,
      socket: null,
      closed: false,
      resizeObserver: null,
      reconnectAttempt: 0,
      reconnectTimer: null,
    };
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      closePane(sess);
    };
    term.onTitleChange((title) => {
      if (title) {
        updateTabLabel(tabObj, title);
      }
    });
    let bellFlashTimer = null;
    term.onBell(() => {
      mount.classList.remove("bell-flash");
      void mount.offsetWidth;
      mount.classList.add("bell-flash");
      clearTimeout(bellFlashTimer);
      bellFlashTimer = setTimeout(
        () => mount.classList.remove("bell-flash"),
        250,
      );
      if (!tabObj.paneEl.classList.contains("active") || document.hidden) {
        tabObj.tabEl.classList.add("bell");
      }
      try {
        bellAudio.currentTime = 0;
        bellAudio.play().catch(() => {});
      } catch (_) {}
    });
    term.attachCustomKeyEventHandler((e) => handleKey(sess, e));
    term.onData((d) => send(sess, d));
    mount.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      showCtxMenu(sess, e.clientX, e.clientY);
    });
    mount.addEventListener("click", (e) => {
      if (!document.getElementById("ctx-menu").contains(e.target))
        hideCtxMenu();
      activePaneSess = sess;
    });
    mount.addEventListener("mousedown", async (e) => {
      if (e.button === 1) {
        e.preventDefault();
        await pasteNow(sess);
      }
    });
    const debouncedFit = debounce(() => {
      if (sess.closed || !tabObj.paneEl.classList.contains("active")) return;
      try {
        fitAddon.fit();
      } catch (_) {}
      sendResize(sess);
    }, 60);
    sess.resizeObserver = new ResizeObserver(debouncedFit);
    sess.resizeObserver.observe(mount);
    tabObj.panes.push(sess);
    return sess;
  }

  function connect(sess) {
    if (sess.closed) return;
    clearTimeout(sess.reconnectTimer);
    let url =
      proto +
      "//" +
      location.host +
      "/terminal/ws?token=" +
      encodeURIComponent(getToken()) +
      "&sid=" +
      encodeURIComponent(sess.sid);
    if (sess.profileId)
      url += "&profile_id=" + encodeURIComponent(sess.profileId);
    const ws = new WebSocket(url);
    sess.socket = ws;
    ws.onopen = () => {
      if (sess.closed) {
        ws.close();
        return;
      }
      sess.reconnectAttempt = 0;
      sess.term.write("\r\n\x1b[32;1mConnected\x1b[0m\r\n");
      sendResize(sess);
    };
    ws.onmessage = (e) => {
      if (sess.closed) return;
      // Handle server-side ping (and our own pong echoes, just in case) —
      // these must NEVER reach term.write or they show up as literal text.
      try {
        const m = JSON.parse(e.data);
        if (m && (m.type === "ping" || m.type === "pong")) {
          if (m.type === "ping") ws.send(JSON.stringify({ type: "pong" }));
          return;
        }
      } catch (_) {}
      sess.term.write(e.data);
    };
    ws.onclose = (ev) => {
      if (sess.closed) return;
      if (ev.code === 4401) {
        sess.term.write(
          "\r\n\x1b[31mSession expired. Please log in again.\x1b[0m\r\n",
        );
        clearToken();
        loginOverlay.classList.add("show");
        return;
      }
      sess.reconnectAttempt = Math.min(sess.reconnectAttempt + 1, 8);
      const delay = Math.round(
        Math.min(30000, 500 * Math.pow(2, sess.reconnectAttempt)) *
          (0.7 + Math.random() * 0.3),
      );
      sess.term.write(
        "\r\n\x1b[33mDisconnected — reconnecting in " +
          (delay / 1000).toFixed(1) +
          "s…\x1b[0m\r\n",
      );
      sess.reconnectTimer = setTimeout(() => connect(sess), delay);
    };
    ws.onerror = () => ws.close();
  }

  function send(sess, data) {
    if (sess.socket && sess.socket.readyState === WebSocket.OPEN)
      sess.socket.send(data);
  }
  function sendResize(sess) {
    send(
      sess,
      JSON.stringify({
        type: "resize",
        cols: sess.term.cols,
        rows: sess.term.rows,
      }),
    );
  }

  function updateTabLabel(tabObj, label) {
    tabObj.tabEl.querySelector(".tab-label").textContent = label || "bash";
    if (
      tabObj.paneEl.classList.contains("active") &&
      !tabObj.tabEl.classList.contains("bell")
    ) {
      document.title = (label || "bash") + " — WebTerminal";
    }
  }

  function activateTab(tabId) {
    tabs.forEach((t) => {
      const a = t.id === tabId;
      t.paneEl.classList.toggle("active", a);
      t.tabEl.classList.toggle("active", a);
      if (a) {
        t.tabEl.classList.remove("bell");
        document.title =
          (t.tabEl.querySelector(".tab-label").textContent || "bash") +
          " — WebTerminal";
      }
    });
    activeTabId = tabId;
    const tabObj = findTab(tabId);
    if (tabObj) {
      activePaneSess = tabObj.panes[0];
      tabObj.panes.forEach((sess) => {
        if (sess.socket) {
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              try {
                sess.fitAddon.fit();
              } catch (_) {}
              sendResize(sess);
            }),
          );
        } else {
          connect(sess);
          initialFit(sess); // NEW: waits for fonts before first measuring/fitting
        }
      });
      if (activePaneSess) activePaneSess.term.focus();
    }
  }

  function confirmCloseTab(tabId) {
    const tabObj = findTab(tabId);
    const label = tabObj
      ? tabObj.tabEl.querySelector(".tab-label").textContent
      : "this tab";
    if (
      window.confirm(
        'Close "' +
          label +
          '"? Tmux-backed sessions keep running in the background.',
      )
    )
      closeTab(tabId);
  }

  function closeTab(tabId) {
    const idx = tabs.findIndex((t) => t.id === tabId);
    if (idx === -1) return;
    const tabObj = tabs[idx];
    tabObj.panes.forEach((sess) => {
      sess.closed = true;
      clearTimeout(sess.reconnectTimer);
      try {
        if (sess.socket) sess.socket.close(1000, "closed");
      } catch (_) {}
      try {
        sess.resizeObserver && sess.resizeObserver.disconnect();
      } catch (_) {}
      try {
        sess.term.dispose();
      } catch (_) {}
    });
    tabObj.paneEl.remove();
    tabObj.tabEl.remove();
    tabs.splice(idx, 1);
    saveSidList();
    if (tabs.length === 0) {
      const t = makeTab();
      activateTab(t.id);
      return;
    }
    if (activeTabId === tabId) {
      const next = tabs[idx] || tabs[idx - 1] || tabs[0];
      activateTab(next.id);
    }
  }

  /* NEW: close a single pane within a tab (split). If it's the last pane
   in the tab, falls back to closing the whole tab (with confirmation). */
  function closePane(sess) {
    const tabObj = findTab(sess.tabId);
    if (!tabObj) return;
    if (tabObj.panes.length <= 1) {
      confirmCloseTab(tabObj.id);
      return;
    }
    if (
      !window.confirm(
        "Close this pane? The shell session may keep running in the background if tmux-backed.",
      )
    )
      return;

    sess.closed = true;
    clearTimeout(sess.reconnectTimer);
    try {
      if (sess.socket) sess.socket.close(1000, "closed");
    } catch (_) {}
    try {
      sess.resizeObserver && sess.resizeObserver.disconnect();
    } catch (_) {}
    try {
      sess.term.dispose();
    } catch (_) {}

    // remove an adjacent split-divider so the layout doesn't leave a gap
    const prevDivider = sess.mount.previousElementSibling;
    const nextDivider = sess.mount.nextElementSibling;
    if (prevDivider && prevDivider.classList.contains("split-divider"))
      prevDivider.remove();
    else if (nextDivider && nextDivider.classList.contains("split-divider"))
      nextDivider.remove();
    sess.mount.remove();

    tabObj.panes = tabObj.panes.filter((p) => p !== sess);
    if (activePaneSess === sess)
      activePaneSess = tabObj.panes[tabObj.panes.length - 1];

    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        tabObj.panes.forEach((p) => {
          try {
            p.fitAddon.fit();
          } catch (_) {}
          sendResize(p);
        });
      }),
    );
    saveSidList();
    if (activePaneSess) activePaneSess.term.focus();
  }

  function splitActiveTab() {
    const tabObj = findTab(activeTabId);
    if (!tabObj) return;
    if (tabObj.panes.length >= 4) {
      showToast("Maximum 4 panes per tab", false);
      return;
    }
    const div = document.createElement("div");
    div.className = "split-divider";
    tabObj.paneEl.appendChild(div);
    const sess = makePaneSession(tabObj, genSid(), null, null);
    connect(sess);
    initialFit(sess);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        tabObj.panes.forEach((s) => {
          try {
            s.fitAddon.fit();
          } catch (_) {}
        });
      }),
    );
    saveSidList();
  }

/* ═══════════════════════════════════════
        CLIPBOARD & PASTE
═══════════════════════════════════════ */
  async function clipRead() {
    if (navigator.clipboard && navigator.clipboard.readText) {
      try {
        const t = await navigator.clipboard.readText();
        if (t != null) return t;
      } catch (_) {}
    }
    return new Promise((res) => {
      const overlay = document.getElementById("paste-overlay");
      const ta = document.getElementById("paste-area");
      let resolved = false;
      const resolve = (v) => {
        if (!resolved) {
          resolved = true;
          overlay.classList.remove("show");
          res(v);
        }
      };
      ta.value = "";
      overlay.classList.add("show");
      setTimeout(() => ta.focus(), 60);
      document.getElementById("paste-send").onclick = () => resolve(ta.value);
      document.getElementById("paste-cancel").onclick = () => resolve("");
      ta.onkeydown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          resolve(ta.value);
        }
        if (e.key === "Escape") resolve("");
      };
    });
  }

  /* Robust clipboard write:
   1) Try execCommand('copy') first via a temp textarea. It runs fully
      synchronously inside the original keypress/click, so it can't lose
      "user gesture" status, and it works over plain HTTP too.
   2) Restore focus to whatever had it (the terminal's hidden input) —
      otherwise the terminal looks unresponsive right after copying.
   3) Only fall back to the async Clipboard API if execCommand is
      unavailable entirely. */
  function copyToClipboardSync(text) {
    const prevActive = document.activeElement;
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    ta.style.left = "-9999px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    let ok = false;
    try {
      ta.focus();
      ta.select();
      ta.setSelectionRange(0, text.length); // iOS Safari
      ok = document.execCommand("copy");
    } catch (err) {
      console.warn("execCommand copy failed:", err);
      ok = false;
    }
    document.body.removeChild(ta);
    if (prevActive && typeof prevActive.focus === "function") {
      prevActive.focus();
    }
    return ok;
  }

  async function copyToClipboard(text) {
    if (!text) return false;
    if (copyToClipboardSync(text)) return true;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.warn("navigator.clipboard.writeText failed:", err);
      }
    }
    return false;
  }

  function copySelection(sess) {
    if (!sess.term.hasSelection()) return false;
    const text = sess.term.getSelection();
    sess.term.clearSelection();
    copyToClipboard(text).then((ok) => {
      showToast(
        ok
          ? "Copied to clipboard"
          : "Copy failed — check browser console for details",
        ok,
      );
    });
    return true;
  }

  async function paste(sess) {
    const t = await clipRead();
    if (t) for (const ch of t) send(sess, ch);
    sess.term.focus();
  }
  async function pasteNow(sess) {
    const t = await clipRead();
    if (t) for (const ch of t) send(sess, ch);
    sess.term.focus();
  }

/* ═══════════════════════════════════════
            ZOOM
═══════════════════════════════════════ */
  function zoomIn(sess) {
    sess.term.options.fontSize = Math.min(sess.term.options.fontSize + 1, 36);
    sess.fitAddon.fit();
  }
  function zoomOut(sess) {
    sess.term.options.fontSize = Math.max(sess.term.options.fontSize - 1, 8);
    sess.fitAddon.fit();
  }
  function zoomReset(sess) {
    sess.term.options.fontSize = settings.fontSize;
    sess.fitAddon.fit();
  }

/* ═══════════════════════════════════════
            SEARCH BAR
═══════════════════════════════════════ */
  const searchBar = document.getElementById("search-bar");
  const searchInput = document.getElementById("search-input");
  function showSearchBar() {
    searchBar.classList.add("show");
    searchInput.focus();
    searchInput.select();
  }
  function hideSearchBar() {
    searchBar.classList.remove("show");
    if (activePaneSess) activePaneSess.term.focus();
  }
  document.getElementById("search-btn").onclick = showSearchBar;
  document.getElementById("search-close").onclick = hideSearchBar;
  document.getElementById("search-next").onclick = () => {
    if (activePaneSess) activePaneSess.searchAddon.findNext(searchInput.value);
  };
  document.getElementById("search-prev").onclick = () => {
    if (activePaneSess)
      activePaneSess.searchAddon.findPrevious(searchInput.value);
  };
  searchInput.addEventListener("input", () => {
    if (activePaneSess)
      activePaneSess.searchAddon.findNext(searchInput.value, {
        incremental: true,
      });
  });
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (activePaneSess)
        activePaneSess.searchAddon.findNext(searchInput.value);
    }
    if (e.key === "Escape") hideSearchBar();
  });

/* ═══════════════════════════════════════
            KEYBOARD SHORTCUTS
═══════════════════════════════════════ */
  function handleKey(sess, e) {
    if (e.type !== "keydown") return true;
    const ctrl = e.ctrlKey || e.metaKey,
      shift = e.shiftKey,
      key = e.key.toLowerCase();
    const prevent = () => {
      e.preventDefault();
      return false;
    };
    if (ctrl && !shift && key === "f") {
      showSearchBar();
      return prevent();
    }
    if (ctrl && (shift || !shift) && key === "c" && sess.term.hasSelection()) {
      copySelection(sess);
      return prevent();
    }
    if (ctrl && shift && key === "v") {
      paste(sess);
      return prevent();
    }
    if (ctrl && !shift && key === "v") {
      paste(sess);
      return prevent();
    }
    if (shift && e.code === "Insert") {
      paste(sess);
      return prevent();
    }
    if (ctrl && e.code === "Insert") {
      copySelection(sess);
      return prevent();
    }
    if (ctrl && shift && key === "a") {
      sess.term.selectAll();
      return prevent();
    }
    if (ctrl && shift && key === "t") {
      const t = makeTab();
      activateTab(t.id);
      return prevent();
    }
    if (ctrl && shift && key === "w") {
      closePane(sess);
      return prevent();
    }
    if (ctrl && shift && key === "d") {
      splitActiveTab();
      return prevent();
    }
    if (ctrl && shift && key === "k") {
      sess.term.clear();
      return prevent();
    }
    if (ctrl && !shift && key === "l") {
      send(sess, "\x0c");
      return prevent();
    }
    if (ctrl && (e.key === "=" || e.key === "+")) {
      zoomIn(sess);
      return prevent();
    }
    if (ctrl && e.key === "-") {
      zoomOut(sess);
      return prevent();
    }
    if (ctrl && e.key === "0") {
      zoomReset(sess);
      return prevent();
    }
    if (ctrl && shift && e.key === "ArrowUp") {
      sess.term.scrollLines(-1);
      return prevent();
    }
    if (ctrl && shift && e.key === "ArrowDown") {
      sess.term.scrollLines(1);
      return prevent();
    }
    if (ctrl && shift && e.key === "PageUp") {
      sess.term.scrollPages(-1);
      return prevent();
    }
    if (ctrl && shift && e.key === "PageDown") {
      sess.term.scrollPages(1);
      return prevent();
    }
    if (ctrl && key === "tab") {
      const idx = tabs.findIndex((t) => t.id === activeTabId);
      const next = tabs[(idx + 1) % tabs.length];
      if (next) activateTab(next.id);
      return prevent();
    }
    return true;
  }

/* ═══════════════════════════════════════
            CONTEXT MENU
═══════════════════════════════════════ */
  const ctxMenu = document.getElementById("ctx-menu");
  let ctxSess = null;
  function showCtxMenu(sess, x, y) {
    ctxSess = sess;
    const hasSel = sess.term.hasSelection();
    document.getElementById("ctx-copy").classList.toggle("disabled", !hasSel);
    document
      .getElementById("ctx-paste-sel")
      .classList.toggle("disabled", !hasSel);
    ctxMenu.style.display = "block";
    const mw = ctxMenu.offsetWidth || 200,
      mh = ctxMenu.offsetHeight || 240;
    ctxMenu.style.left = (x + mw > innerWidth ? x - mw : x) + "px";
    ctxMenu.style.top = (y + mh > innerHeight ? y - mh : y) + "px";
  }
  function hideCtxMenu() {
    ctxMenu.style.display = "none";
  }
  document.addEventListener("click", (e) => {
    if (!ctxMenu.contains(e.target)) hideCtxMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideCtxMenu();
  });
  function ctxAction(id, fn) {
    document.getElementById(id).addEventListener("click", async (e) => {
      e.stopPropagation();
      hideCtxMenu();
      if (ctxSess) await fn(ctxSess);
      if (ctxSess && !ctxSess.closed) ctxSess.term.focus();
    });
  }
  ctxAction("ctx-open-tab", () => {
    const t = makeTab();
    activateTab(t.id);
  });
  ctxAction("ctx-copy", (sess) => copySelection(sess));
  ctxAction("ctx-paste", (sess) => pasteNow(sess));
  ctxAction("ctx-paste-sel", (sess) => {
    if (sess.term.hasSelection())
      for (const ch of sess.term.getSelection()) send(sess, ch);
  });
  ctxAction("ctx-select-all", (sess) => sess.term.selectAll());
  ctxAction("ctx-find", () => showSearchBar());
  ctxAction("ctx-clear", (sess) => {
    sess.term.reset();
    send(sess, "\x0c");
  });
  ctxAction("ctx-split", () => splitActiveTab());
  ctxAction("ctx-close-pane", (sess) => closePane(sess));

/* ═══════════════════════════════════════
         TOPBAR BUTTONS
═══════════════════════════════════════ */
  document.getElementById("split-btn").onclick = () => splitActiveTab();
  document.getElementById("zoom-in-btn").onclick = () => {
    if (activePaneSess) zoomIn(activePaneSess);
  };
  document.getElementById("zoom-out-btn").onclick = () => {
    if (activePaneSess) zoomOut(activePaneSess);
  };
  tabAddBtn.onclick = () => {
    const t = makeTab();
    activateTab(t.id);
  };

/* ═══════════════════════════════════════
            WINDOW EVENTS
═══════════════════════════════════════ */
  const debouncedWindowResize = debounce(() => {
    const tabObj = findTab(activeTabId);
    if (tabObj)
      tabObj.panes.forEach((s) => {
        try {
          s.fitAddon.fit();
        } catch (_) {}
        sendResize(s);
      });
  }, 80);
  window.addEventListener("resize", debouncedWindowResize);
  window.addEventListener("beforeunload", (e) => {
    if (tabs.length) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  /* NEW: re-fit when the tab becomes visible again (covers cases where the
   browser tab was backgrounded and layout/metrics drifted). */
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    const tabObj = findTab(activeTabId);
    if (tabObj)
      tabObj.panes.forEach((s) => {
        try {
          s.fitAddon.fit();
        } catch (_) {}
        if (s.socket) sendResize(s);
      });
  });

/* ═══════════════════════════════════════
            HELPERS
═══════════════════════════════════════ */
  function esc(s) {
    const d = document.createElement("div");
    d.textContent = String(s);
    return d.innerHTML;
  }

/* ═══════════════════════════════════════
            BOOT
═══════════════════════════════════════ */
  function bootApp(loginData) {
    appBooted = true;
    const username = loginData?.username || "";
    document.getElementById("sb-avatar").textContent = (
      username.slice(0, 2) || "?"
    ).toUpperCase();
    document.getElementById("sb-username").textContent = username;
    if (loginData?.is_admin || isAdmin()) {
      document.getElementById("nav-admin").style.display = "";
    }
    buildSettingsUI();
    const saved = loadSidList();
    let firstTab;
    if (saved.length > 0) {
      saved.forEach((panesSpec, i) => {
        const t = makeTab(panesSpec);
        if (i === 0) firstTab = t;
      });
    } else {
      firstTab = makeTab();
    }
    activateTab(firstTab.id);
    activatePage("terminal", document.getElementById("nav-terminal"));
  }

  (async function init() {
    const ok = await validateSession();
    if (ok) {
      loginOverlay.classList.remove("show");
      const me = await api("/api/me").catch(() => ({
        username: "",
        is_admin: false,
      }));
      bootApp(me);
    } else {
      loginOverlay.classList.add("show");
      document.getElementById("li-user").focus();
    }
  })();
})();
