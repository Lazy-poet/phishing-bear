
import React from 'react'
import type { NextPage } from 'next'
import { PrivateLayout, SEO, PlatformWrapper, PlatformHero, PlatformBanners } from '@components'

const Platform: NextPage = () => {
    return (
        <>
            <SEO />
            <PrivateLayout>
                <PlatformWrapper>
                    <PlatformHero />
                    <PlatformBanners />
                </PlatformWrapper>
            </PrivateLayout>
        </>
    )
}
export default Platform;
