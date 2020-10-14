const white = '#FFF0F5'
const pink1 = '#ff5c8d';
const pink2 = '#ff62a5';
const pink3 = '#FF7F9D';
const purple = '#CE85F8'
const green = '#37e884ff';
const sidebar_background = '#2C2638';
const background = '#353042'

module.exports = {
  name: 'pink',
  displayName: 'Dark Pink Theme',
  theme: {
    background: {
      default: sidebar_background,
      success: green,
      notice: '#f1fa8c',
      warning: '#ffb86c',
      danger: '#ff5555',
      surprise: purple,
      info: '#8be9fd'
    },
    foreground: {
      default: pink2
    },
    highlight: {
    },
    styles: {
      sidebar: {
        background: {
          default: sidebar_background
        }
      },
      dialog: {
        background: {
        }
      },
      sidebarHeader: {
        background: {
          default: pink1,
        },
        foreground: {
          default: white,
        },
      },
      paneHeader: {
        foreground: {
          default: pink3,
        },
        background: {
          default: sidebar_background,
        }
      },
      pane: {
        background: {
          default: background,
        },
        foreground: {
          default: pink2
        },
        highlight: {
          default: pink2,
        }
      },
      transparentOverlay: {
        background: {
        }
      }
    }
  }
}