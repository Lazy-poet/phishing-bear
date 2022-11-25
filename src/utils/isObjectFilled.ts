const isObjectFilled = (obj: Record<string, any>, fields?: string[]) => {
    return (
        !!Object.keys(obj).length &&
        [...(Array.isArray(fields) && fields.length ? fields : Object.keys(obj))]
            .every(key => !["", null, undefined].includes(obj[key]))
    )
}

export default isObjectFilled;