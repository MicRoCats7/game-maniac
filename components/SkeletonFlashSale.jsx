import { Skeleton } from 'antd';
import React from 'react'

function SkeletonFlashSale() {
    return (
        <Skeleton.Node
            active={true}
            style={{
                width: "100%",
                backgroundColor: '#bfbfbf',
                height: "150px",
            }}
        >
            <div className="px-6 pt-[15px] pb-4 w-full h-full flex flex-col overflow-hidden">
                <Skeleton />
            </div>
        </Skeleton.Node>
    );
}

export default SkeletonFlashSale