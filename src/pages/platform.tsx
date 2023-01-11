
import React from 'react'
import type { NextPage } from 'next'
import { PublicLayout, SEO, PlatformWrapper, PlatformHero, PlatformBanners } from '@components'

const Platform: NextPage = () => {
    return (
        <>
            <SEO />
            <PublicLayout>
                <PlatformWrapper>
                    <PlatformHero />
                    <PlatformBanners />
                </PlatformWrapper>
            </PublicLayout>
        </>
    )
}
export default Platform;
