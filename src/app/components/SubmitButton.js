export const SubmitButton = ({ classStyle, btnSubmitText, isLoading }) => {
    return (
        <button
            className={classStyle}
            type="submit"
        >
            {isLoading
                ? <>
                    <div
                        role="status"
                        className="inline-block h-4 w-4 mr-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    />
                    Cargando
                </>
                : btnSubmitText        
            }

        </button>
    )
}
