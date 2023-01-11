import React from 'react'
import type { NextPage } from 'next'
import { PrivateLayout, LinkButton, SEO, HandbookWrapper, Section1, Section2 } from '@components'

const Handbook: NextPage = () => {
    return (
        <>
            <SEO />
            <PrivateLayout>
                <HandbookWrapper>
                    <Section1 />
                    <Section2 />
                </HandbookWrapper>

            </PrivateLayout>
        </>
    )
}
export default Handbook;
