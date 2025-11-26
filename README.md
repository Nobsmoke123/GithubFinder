# GitHub Finder

A modern, responsive web application for searching and discovering GitHub users. Built with React, TypeScript, and Vite, this app provides an intuitive interface to search for GitHub users, view their profiles, and manage recent searches.

**Live Preview** : &nbsp; [github-finder-omega-taupe.vercel.app](https://github-finder-omega-taupe.vercel.app/)

---

## Features

- 🔍 **User Search**: Search for GitHub users by username
- 💡 **Autocomplete Suggestions**: Real-time search suggestions with debounced input
- 📋 **Recent Searches**: Automatically saves and displays your recent searches in localStorage
- 🎨 **Modern UI**: Clean, responsive design built with Tailwind CSS
- ⚡ **Fast Performance**: Optimized with React Query for efficient data fetching and caching
- 🔄 **Query Prefetching**: Recent searches are prefetched on hover for instant loading

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Query (TanStack Query)** - Data fetching, caching and state management
- **React Icons** - Icon library
- **use-debounce** - Input debouncing for search suggestions

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd github-finder
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your GitHub API URL:

```env
VITE_GITHUB_API_URL=https://api.github.com
```

> **Note**: The GitHub API is public and doesn't require authentication for basic user searches. However, if you need higher rate limits, you can use a personal access token.

## Usage

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

### Build

Build the project for production:

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint to check for code issues:

```bash
npm run lint
```

## Project Structure

```
github-finder/
├── public/              # Static assets
├── src/
│   ├── api/
│   │   └── github.ts    # GitHub API functions
│   ├── components/
│   │   ├── UserCard.tsx           # User profile card component
│   │   ├── UserSearch.tsx         # Main search component
│   │   ├── RecentSearches.tsx     # Recent searches list
│   │   └── SuggestionDropdown.tsx # Autocomplete dropdown
│   ├── types/
│   │   └── user.ts      # TypeScript type definitions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## How It Works

1. **Search**: Enter a GitHub username in the search input
2. **Suggestions**: As you type, the app shows autocomplete suggestions (after 2+ characters)
3. **Submit**: Click "Search" or select a suggestion to fetch the user profile
4. **Display**: View the user's profile card with avatar, name, bio, and a link to their GitHub profile
5. **Recent Searches**: Your searches are automatically saved and displayed in the recent searches section

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

| Variable              | Description         | Default                  |
| --------------------- | ------------------- | ------------------------ |
| `VITE_GITHUB_API_URL` | GitHub API base URL | `https://api.github.com` |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
