import React from 'react'
import type { NextPage } from 'next'
import { PublicLayout, LinkButton, SEO, HandbookWrapper, Section1, Section2 } from '@components'

const Handbook: NextPage = () => {
    return (
        <>
            <SEO />
            <PublicLayout>
                <HandbookWrapper>
                    <Section1 />
                    <Section2 />
                </HandbookWrapper>

            </PublicLayout>
        </>
    )
}
export default Handbook;
