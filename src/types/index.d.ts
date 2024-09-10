export type TMenuItems = {
    url: string,
    title: string,
    icon?: React.ReactNode
}

export type TActiveLinkProps = {
    url: string,
    children: React.ReactNode
}

export type TCreateUserParams = {
    clerkId: string;
    name?: string;
    username: string;
    email: string;
    avatar?: string;
}

export type TCreateCourseParams = {
    title: string;
    slug: string;
}

export type TUpdateCoureParams = {
    slug: string;
    updateData: Partial<ICourse>;
}