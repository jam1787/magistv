import Link from 'next/link';

export async function Wrapper({ children }) {
    return (
        <div className='rounded-sm px-4 py-8 mb-8'>{children}</div>
    );
}
const ConfirmationSubmit = async({ searchParams }) => {
    const confirmationToken = searchParams?.confirmation

    if (!confirmationToken || confirmationToken === '') {
        return (
            <Wrapper>
                <h1 className='font-bold text-lg mb-4'>Error</h1>
                <p>El token no es válido</p>
            </Wrapper>
        );
    }

    // send email validation request to strapi and wait for the response.
    try {
        const strapiResponse = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/email-confirmation?confirmation=${confirmationToken}`
        )
        if (!strapiResponse.ok) {
            let error = '';
            const contentType = strapiResponse.headers.get('content-type')
            if (contentType === 'application/json; charset=utf-8') {
                const data = await strapiResponse.json()
                error = data.error.message
            } else {
                error = strapiResponse.statusText
            }
            return (
                <Wrapper>
                    <h1 className='font-bold text-lg mb-4'>Error</h1>
                    <p>Error: {error}</p>
                </Wrapper>
            )
        }
    } catch (error) {
        return (
            <Wrapper>
                <h1 className='font-bold text-lg mb-4'>Error</h1>
                <p>{error.message}</p>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <h1 className='font-bold text-lg mb-4'>Correo electronico confirmado.</h1>
            <p>
                Tu correo electronico fue confirmado exitosamente. Ahora ya puedes
                <Link href='/sign-in' className='underline'>
                    Iniciar Sesión
                </Link>
                .
            </p>
        </Wrapper>
    )
}

export default ConfirmationSubmit