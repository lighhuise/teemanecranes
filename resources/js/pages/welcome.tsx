import { Head } from '@inertiajs/react';
import AppLayout from '../layouts/app-layout';
import HeroSimpleSplit from '../components/hero-simple-split';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Welcome() {
    return (
        <AppLayout title="Welcome to Starter Kit">
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
                <HeroSimpleSplit />

                <div className="grid md:grid-cols-3 gap-6 pt-8">
                    <Card className="hover:shadow-md transition-shadow group">
                        <CardHeader>
                            <div className="w-12 h-12 bg-chart-1/20 rounded-xl flex items-center justify-center mb-4 text-chart-1 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                            <CardTitle className="text-xl">Laravel 13 Backend</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Powered by the latest Laravel features. Build robust APIs, manage database elegantly with Eloquent, and utilize a powerful ecosystem.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow group">
                        <CardHeader>
                            <div className="w-12 h-12 bg-chart-2/20 rounded-xl flex items-center justify-center mb-4 text-chart-2 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                </svg>
                            </div>
                            <CardTitle className="text-xl">Filament 5 Admin</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                A beautifully designed, TALL-stack admin panel. Already configured for you at the <a href="/admin" className="text-primary hover:underline">/admin</a> route.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow group">
                        <CardHeader>
                            <div className="w-12 h-12 bg-chart-3/20 rounded-xl flex items-center justify-center mb-4 text-chart-3 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <CardTitle className="text-xl">React + Inertia</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Build single-page apps without building an API. The frontend uses modern React with Vite for lightning-fast HMR and build times.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 mt-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between border border-primary/20">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2 text-foreground">Ready to start building?</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Edit <code className="bg-primary/10 px-2 py-1 rounded text-sm mx-1">resources/js/pages/welcome.tsx</code> to see these changes live with Vite HMR.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://laravel.com/docs" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-background text-foreground rounded-lg shadow-sm border border-border font-medium hover:bg-muted transition-colors">
                            Docs
                        </a>
                        <a href="/admin" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg shadow-sm font-medium hover:bg-primary/90 transition-colors">
                            Go to Admin
                        </a>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
