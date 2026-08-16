# Laravel + React + Filament Starter Kit

Welcome to the ultimate TALL/React stack hybrid starter kit. This project is configured to give you a powerful Laravel backend with a beautiful Filament admin panel, combined seamlessly with a modern React + Inertia.js frontend.

## 🚀 Tech Stack

- **Backend:** [Laravel 13](https://laravel.com)
- **Admin Panel:** [Filament 5](https://filamentphp.com)
- **Frontend SPA:** [React 19](https://react.dev) + [Inertia.js v3](https://inertiajs.com)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com) (Base UI Preset)

## 🛠️ Getting Started

### 1. Backend Setup

Ensure you have PHP and Composer installed, then run:

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

> **Note:** Filament has its own robust authentication and user management system built-in, accessible out-of-the-box. 

### 2. Frontend Setup

Install the NPM dependencies for the React frontend:

```bash
npm install
```

### 3. Run Development Servers

To enjoy hot-module replacement (HMR) and see your frontend changes live, run the Vite development server:

```bash
npm run dev
```

If you are not using a local server environment like Laravel Herd or Valet, you can serve the Laravel backend simultaneously:

```bash
php artisan serve
```

---

## 🎨 Architecture & Usage

### The Frontend (React + Inertia)

The user-facing website is completely powered by React and Inertia.
- **Routes:** Define your web routes in `routes/web.php` and return Inertia responses (e.g., `Inertia::render('welcome')`).
- **Pages:** React pages are located in `resources/js/pages/`.
- **Layouts:** A default layout (`resources/js/layouts/app-layout.tsx`) is provided with a built-in Dark Mode toggle that saves to `localStorage` and respects system preferences.

### The Admin Panel (Filament)

The admin panel is handled independently by Filament.
- Access the admin panel by visiting `/admin` in your browser.
- The admin dashboard uses Laravel Blade and Livewire, staying completely separated from your Inertia React frontend to keep administrative tasks clean, simple, and fully integrated with the TALL stack.

### Shadcn UI Components

[Shadcn UI](https://ui.shadcn.com) is fully configured for your React frontend. You can scaffold beautifully designed, accessible components directly into your project.

To add a new component, run:

```bash
npx shadcn@latest add [component-name]
```

For example, to add a Card component:

```bash
npx shadcn@latest add card
```

Components will be generated in `resources/js/components/ui/` and can be customized to your liking.

---

## 💡 Dark Mode (Tailwind v4)

This starter kit utilizes Tailwind CSS v4. Dark mode is implemented via the class strategy. 
The custom variant is registered in `resources/css/app.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

You can use the `dark:` prefix on any Tailwind utility class to apply styling specifically when dark mode is toggled on in the layout.
