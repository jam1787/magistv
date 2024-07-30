export const SubmitButton = ({ btnSubmitText, isLoading }) => {
    return (
        <button
            className="w-full my-5 py-2 px-5 font-medium bg-[#e7ebff] text-[#2245ff] rounded-md transition-opacity hover:bg-opacity-85 disabled:bg-opacity-70"
            aria-disabled={isLoading}
            disabled={isLoading}
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