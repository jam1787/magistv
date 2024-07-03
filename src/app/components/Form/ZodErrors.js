export const ZodErrors = ({error}) => {
    if(!error) return null

    return error.map((err, i) => (
        <p className="text-red-500 text-xs mt-2" key={i}>{err}</p>
    ))
}