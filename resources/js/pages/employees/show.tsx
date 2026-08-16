import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import team from '@/routes/team';
import Wrapper from "@/components/ui/misc/wrapper";
import { Building2, MapPin, Calendar, User, ArrowLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EmployeeDetail {
    id: number;
    first_name: string;
    last_name: string;
    nickname: string | null;
    birthday: string | null;
    role: string;
    department: string;
    branch_location: string;
    bio: string | null;
    image_url: string | null;
    superior: {
        id: number;
        first_name: string;
        last_name: string;
        role: string;
    } | null;
}

export default function Show({ employee }: { employee: EmployeeDetail }) {
    return (
        <>
            <Head title={`${employee.first_name} ${employee.last_name}`} />

            <section className="py-12 bg-muted/30 border-b border-border">
                <Wrapper>
                    <Link href={team.index.url()} className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Team
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Profile Image Column */}
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="relative aspect-square rounded-sm overflow-hidden bg-muted border border-border shadow-xl">
                                {employee.image_url ? (
                                    <img src={employee.image_url} alt={`${employee.first_name} ${employee.last_name}`} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/30">
                                        <User className="w-32 h-32 mb-4" />
                                        <span className="text-6xl font-black">
                                            {employee.first_name.charAt(0)}{employee.last_name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Details Column */}
                        <div className="w-full md:w-2/3 flex flex-col">
                            <div className="mb-2 inline-flex items-center gap-4">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-sm font-bold text-primary tracking-widest uppercase">{employee.department}</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-foreground uppercase mb-2">
                                {employee.first_name} {employee.last_name}
                            </h1>

                            {employee.nickname && (
                                <p className="text-xl text-muted-foreground font-medium mb-4">
                                    "{employee.nickname}"
                                </p>
                            )}

                            <p className="text-2xl font-bold text-primary mb-8">
                                {employee.role}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 py-8 border-y border-border">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Branch</p>
                                        <p className="font-semibold">{employee.branch_location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Department</p>
                                        <p className="font-semibold">{employee.department}</p>
                                    </div>
                                </div>
                                {employee.birthday && (
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Birthday</p>
                                            <p className="font-semibold">{employee.birthday}</p>
                                        </div>
                                    </div>
                                )}
                                {employee.superior && (
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Reports To</p>
                                            <Link href={team.show.url(employee.superior.slug)} className="font-semibold text-primary hover:underline">
                                                {employee.superior.first_name} {employee.superior.last_name}
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {employee.bio && (
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-widest mb-6">About {employee.first_name}</h3>
                                    <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                                        {employee.bio.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Wrapper>
            </section>
        </>
    );
}

Show.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
