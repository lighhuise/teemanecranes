import { useState, useEffect, useRef } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { InfiniteScroll } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import team from '@/routes/team';

import { Building2, MapPin, Search } from 'lucide-react';
import Wrapper from "@/components/ui/misc/wrapper";
import { Input } from "@/components/ui/input";
import SectionHeading from '@/components/ui/misc/section-heading';

interface Employee {
    id: number;
    slug: string;
    first_name: string;
    last_name: string;
    role: string;
    department: string;
    branch_location: string;
    image_url: string | null;
}

interface PaginatedData<T> {
    data: T[];
    next_cursor?: string | null;
}

function EmployeeCardSkeleton() {
    return (
        <div className="bg-background border border-border rounded-md flex flex-col items-center text-center p-8 animate-pulse">
            <div className="w-32 h-32 rounded-full bg-muted mb-6 shrink-0" />
            <div className="h-5 w-36 rounded bg-muted mb-3" />
            <div className="h-3 w-24 rounded bg-muted mb-6" />
            <div className="w-full h-px bg-border mb-6" />
            <div className="flex flex-col gap-3 w-full items-center">
                <div className="h-3 w-32 rounded bg-muted" />
                <div className="h-3 w-28 rounded bg-muted" />
            </div>
        </div>
    );
}

export default function Index({ employees, filters }: { employees: PaginatedData<Employee>, filters: { search?: string } }) {
    const [search, setSearch] = useState(filters?.search || '');
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        const timeoutId = setTimeout(() => {
            router.get(team.index.url(), { search }, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            });
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [search]);

    return (
        <>
            <Head title="Our Team" />

            <div className="bg-muted/30 py-24 border-b border-border">
                <Wrapper>
                    <SectionHeading
                        label="The Teemane Family"
                        title="OUR TEAM"
                        align="center"
                    >
                        Meet the skilled professionals behind Teemane Cranes. From our operators to our engineers, our people are our greatest asset and the foundation of our success.
                    </SectionHeading>

                    <div className="relative w-full max-w-md mx-auto mt-10">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search by name, role, or department..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-12 h-14 text-base rounded-full shadow-sm bg-background border-border"
                        />
                    </div>
                </Wrapper>
            </div>

            <section className="py-24 bg-background">
                <Wrapper>
                    <InfiniteScroll data="employees">
                        {({ loading, hasMore }: { loading: boolean; hasMore: boolean }) => (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {employees.data.map((employee) => (
                                        <Link
                                            key={employee.id}
                                            href={team.show.url(employee.slug)}
                                            className="group relative bg-background border border-border rounded-md flex flex-col items-center text-center p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1"
                                        >
                                            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-muted group-hover:border-primary transition-colors duration-300">
                                                {employee.image_url ? (
                                                    <img src={employee.image_url} alt={`${employee.first_name} ${employee.last_name}`} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full bg-muted flex items-center justify-center">
                                                        <span className="text-3xl font-black text-muted-foreground/50">
                                                            {employee.first_name.charAt(0)}{employee.last_name.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {employee.first_name} {employee.last_name}
                                            </h3>
                                            <p className="text-sm font-bold text-primary tracking-wider uppercase mt-2 mb-6">
                                                {employee.role}
                                            </p>

                                            <div className="w-full h-px bg-border mb-6 group-hover:bg-primary/20 transition-colors"></div>

                                            <div className="flex flex-col gap-3 w-full text-sm text-muted-foreground">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Building2 className="w-4 h-4" />
                                                    <span>{employee.department}</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{employee.branch_location}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* Skeleton cards while next page loads */}
                                {loading && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                                        {Array.from({ length: 4 }).map((_, i) => (
                                            <EmployeeCardSkeleton key={i} />
                                        ))}
                                    </div>
                                )}

                                {/* End of list */}
                                {!loading && !hasMore && employees.data.length > 0 && (
                                    <p className="text-center text-sm text-muted-foreground mt-16 font-medium tracking-widest uppercase">
                                        — All team members loaded —
                                    </p>
                                )}
                            </>
                        )}
                    </InfiniteScroll>
                </Wrapper>
            </section>
        </>
    );
}

Index.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
