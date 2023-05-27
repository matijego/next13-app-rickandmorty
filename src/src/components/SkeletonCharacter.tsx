import React from 'react'
import { Card } from 'primereact/card'
import { Skeleton } from 'primereact/skeleton'

export function SkeletonCharacter() {
    
    const cardSkeleton = 
        Array.from({ length: 8 }, (_, index) => (
            <div className="flex justify-content-center col-12 lg:col-3" key={'CardSkeleto-' + index}>
                <Card className="w-11 flex justify-content-center fadein border-1 border-green-500">
                    <Skeleton shape="circle" size="200px"></Skeleton>
                    <div className='flex justify-content-center'>
                        <Skeleton width="10rem" className="mt-4"></Skeleton>
                    </div>
                </Card>
            </div>
        ));

  return (
    <div className='mt-3 p-2 grid w-full'>
        {cardSkeleton}
    </div>
  )
}
