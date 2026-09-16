# Teemane Cranes - Corporate Website & CMS

This repository contains the official corporate website and Content Management System for **Teemane Cranes**.

## 🏗️ About Teemane Cranes

Established in 2012, Teemane Cranes is a leading provider of crane hire, heavy lifting, rigging, and specialised transport across South Africa's most demanding worksites. 

- **Headquarters:** Bellville South, Cape Town, South Africa.
- **Capacity:** Modern fleet of hydraulic cranes with capacities of up to 440 tons.
- **Availability:** 24 hours a day, 365 days a year for emergency response.
- **Experience:** Over 100+ years of combined management experience, executing complex and high-stakes projects with a proven track record.
- **Services:** Mobile Crane Hire, Heavy Lifting, Rigging Services, Crane Truck Hire, Heavy Haulage, Machinery Relocation, Abnormal Transport, and Lift Planning.

## 🚀 Tech Stack

The application is built using a modern, hybrid approach. The user-facing website is a high-performance React SPA, while the back-office CMS leverages Laravel and Filament for powerful content management.

- **Backend / API:** [Laravel 13](https://laravel.com)
- **CMS / Admin Panel:** [Filament 5](https://filamentphp.com)
- **Frontend SPA:** [React 19](https://react.dev) + [Inertia.js v3](https://inertiajs.com)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com) (React)
- **Testing:** [Pest PHP](https://pestphp.com/)

---

## 🛠️ Getting Started

### 1. Backend Setup

Ensure you have PHP and Composer installed, then run:

```bash
composer install
cp .env.example .env
php artisan key:generate
```

Configure your database in the `.env` file, then run the migrations and seeders (seeders will populate the initial users and dynamic service data):

```bash
php artisan migrate --seed
```

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
- **Routes:** Web routes are defined in `routes/web.php` and return Inertia responses (e.g., `Inertia::render('home')`).
- **Pages:** React pages are located in `resources/js/pages/`.
- **Content Formatting:** Shadcn UI components and Tailwind Typography (`prose`) are used heavily to render rich text content securely.

### The Admin Panel (Filament)

The CMS is handled independently by Filament.
- Access the admin panel by visiting `/admin` in your browser.
- Content managers can dynamically build the Services pages using a flexible Block Builder (Rich Text, Image Galleries, Video Embeds, Media & Text).

### Client Content Handoff

There is a `data-docs/` directory included in the root of the project. This acts as an offline drafting tool for the client to review and edit website copy, SEO metadata, and images in a clean Markdown format before they are inputted into the CMS.
