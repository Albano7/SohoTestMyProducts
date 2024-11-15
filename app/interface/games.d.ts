
interface ApiResponseGetUsersProps {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data?: UserProps[] | null;
    support?: SupportProps;
    error?: number;
    errorDetail?: string;
}

type UserProps = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

type SupportProps = {
    url: string;
    text: string;
}
